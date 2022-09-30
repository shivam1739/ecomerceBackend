const { Role, User } = require("../models/index");
const authServices = require("../services/auth.services");

const addRollToUser = async (userId, roleId) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  const role = await Role.findOne({
    where: {
      id: roleId,
    },
  });
  user.addRole(role);
  return user;
};

const removeRoleFromUser = async (userEmail, roleName) => {
  try {
    const user = await authServices.getuserbyEmail(userEmail);
    const role = await getRoleByName(roleName);
    //   console.log(role);
    await user.removeRole(role);
    return user;
  } catch (err) {
    console.log(err);
  }
};
const getRoleByName = async (roleName) => {
  try {
    const response = await Role.findOne({
      where: {
        name: roleName,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
const getRoleById = async (id) => {
  try {
    const response = await Role.findByPk(id);
    return response;
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addRollToUser,
  removeRoleFromUser,
  getRoleByName,
  getRoleById,
};
