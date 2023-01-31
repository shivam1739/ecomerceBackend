const authController = require("../controller/auth.controller");
const authMiddelWare = require("../middelWare/authenctication.validators");
const routes = (app) => {
  app.post("/ecomm/api/v1/signup", authController.signup);
  app.post("/ecomm/api/v1/signin", authController.signin);
  app.post(
    "/ecomm/api/v1/authenticat",
    authMiddelWare.isAuthenticated,
    authController.authenticated
  );
};

module.exports = routes;
