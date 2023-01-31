const authServices = require("../services/auth.services");
const roleSerives = require("../services/role.services");
const jwt = require("jsonwebtoken");
const helperService = require("../services/helper.service");
require("dotenv").config();

const signup = async (req, res) => {
  /* route for signup */
  try {
    const response = await authServices.signup(req.body);
    console.log(response);

    return res.json({
      message: "succsessfully signup",
      code: 200,
      success: true,
      data: response,
    });
  } catch (response) {
    console.log(response);
    return res.json({
      message: response.errors[0].message,
      code: 400,
      success: true,
      data: response,
    });
  }
};

const signin = async (req, res) => {
  console.log(req);
  const userData = await helperService.getuserbyEmail(req.body.email);

  if (!userData) {
    return res.json({
      message: "email id is invalid please try again ",
      code: 400,
      success: true,
      data: {},
    });
  }

  const passwordVerified = authServices.verifyPassword(
    req.body.password,
    userData.password
  );
  var token = jwt.sign(
    {
      email: userData.email,
      password: userData.password,
      username: userData.username,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "2h" }
  );
  if (!passwordVerified) {
    return res.json({
      message: "password is invalid please try again ",
      code: 400,
      success: true,
      data: {},
    });
  }

  return res.json({
    message: "successfully sign in ",
    code: 200,
    success: true,
    data: userData,
    token: token,
  });
};
const authenticated = (req, res) => {
  if (req.user) {
    return res.json({
      message: "isAuthenticated",
      code: 200,
      success: true,
      data: "true",
    });
  }
};

module.exports = { signup, signin, authenticated };
