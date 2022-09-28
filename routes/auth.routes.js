const authController = require('../controller/auth.controller')

const routes = (app) => {


    app.post('/ecomm/api/v1/signup', authController.signup);
    app.post('/ecomm/api/v1/signin', authController.signin);
app.patch('/ecomm/api/v1/user:userId',authController.addRollToUser);









}

module.exports = routes;