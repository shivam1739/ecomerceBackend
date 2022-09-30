const authServices = require("../services/auth.services");
const roleSerives = require("../services/role.services");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.json({
      status: 401,
      message: "JWT token is missing",
      data: {},
      err: "Invalid or missing argument in request header",
    });
  }
  const response = authServices.verifyToken(token);
  if (!response) {
    return res.json({
      status: 401,
      message: "JWT token is invelid",
      data: {},
      err: "Invalid or missing argument in request header",
    });
  }

  const user = await authServices.getuserbyEmail(response.email);
  if (!user) {
    return res.json({
      status: 401,
      message: "JWT token send for an invalid user",
      data: {},
      err: "Invalid credentials  ",
    });
  }
  req.user = user;
  next();
};

const isAdmin = async (req, res, next) => {
  const adminRole = await roleSerives.getRoleByName("admin");
  const roleAdmin = user.hasRole(adminRole);
  if (!roleAdmin) {
    return res.json({
      status: 401,
      message: "user is not admin",
      data: {},
      err: "Not autherized",
    });
  }
  next();
};

module.exports = { isAuthenticated, isAdmin };
