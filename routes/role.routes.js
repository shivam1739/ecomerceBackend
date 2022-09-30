const roleController = require("../controller/role.controller");
const AuthenticationMiddleWare = require("../middelWare/authenctication.validators");
const { isAdmin } = require("../middelWare/authenctication.validators");

const routes = (app) => {
  app.post(
    "/ecomm/api/v1/role",
    AuthenticationMiddleWare.isAuthenticated,
    isAdmin,
    roleController.addRollToUser
  );
  app.delete(
    "/ecomm/api/v1/role",
    AuthenticationMiddleWare.isAuthenticated,
    isAdmin,
    roleController.removeRoleFromUser
  );
};

module.exports = routes;
