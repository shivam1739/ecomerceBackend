const roleServices = require("../services/role.services");

const addRollToUser = async (req, res) => {
  const response = await roleServices.addRollToUser(
    req.body.userId,
    req.body.roleId
  );
  return res.json({
    message: "successfully add role ",
    code: 200,
    success: true,
    data: response,
  });
};

const removeRoleFromUser = async (req, res) => {
  const response = await roleServices.removeRoleFromUser(
    req.body.userEmail,
    req.body.roleName
  );
  if (response) {
    return res.json({
      message: "Role is removed successfully",
      success: true,
      code: 200,
      data: response,
    });
  } else {
    return res.json({
      message: "Internal server error",
      success: true,
      code: 500,
      err: response,
    });
  }
};

module.exports = { addRollToUser, removeRoleFromUser };
