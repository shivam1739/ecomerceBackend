const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (body) => {
  const signupResponse = await User.create({
    email: body.email,
    password: body.password,
    username: body.username,
  });

  return signupResponse;
};

const getuserbyEmail = async (emailData) => {
  const response = await User.findOne({
    where: {
      email: emailData,
    },
  });

  return response;
};

const verifyPassword = (pass, hashPass) => {
  const response = bcrypt.compareSync(pass, hashPass);
  return response;
};

const verifyToken = (token) => {
  try {
    const response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signup,
  getuserbyEmail,
  verifyPassword,
  verifyToken,
};
