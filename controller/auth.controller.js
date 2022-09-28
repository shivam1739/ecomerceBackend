const authServices = require('../services/auth.services')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const signup = async (req, res) => {
    /* route for signup */
    try {
        const response = await authServices.signup(req.body);
        return res.json({
            message: "succsessfull signup",
            code: 200,
            success: true,
            data: response,
        })
    }
    catch (response) {
        return res.json({
            message: response,
            code: 400,
            success: true,
            data: response,
        })
    }
}



const signin = async (req, res) => {
    const userData = await authServices.getuserbyEmail(req.body.email);

    if (!userData) {
        return res.json({
            message: "email id is invalid please try again ",
            code: 400,
            success: true,
            data: {},
        })
    }
    
    const passwordVerified = await authServices.verifyPassword(req.body.password, userData.password);
    var token = jwt.sign({ email: userData.email, password: userData.password, username: userData.username},
         process.env.JWT_SECRET_KEY, {expiresIn: '2h'});
    if (!passwordVerified) {
        return res.json({
            message: "password is invalid please try again ",
            code: 400,
            success: true,
            data: {},
            
        })
    }

    return res.json({
        message: "successfully sign in ",
        code: 200,
        success: true,
        data: userData,
        token:token
    })



}

const addRollToUser = async(req,res)=>{
const response = await authServices.addRollToUser (req.params.userId,body.roleId)
return res.json({
    message: "successfully add role ",
    code: 200,
    success: true,
    data: response,

})


} 
module.exports = { signup, signin ,addRollToUser}