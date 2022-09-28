
const express = require('express');
const {sequelize}=require('./models/index')
const categoryRoute = require('./routes/category.routes');
const productRoute = require('./routes/product.routes')
const authRoute = require('./routes/auth.routes')
const bodyParser = require('body-parser');
const port = 3000
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

categoryRoute(app);
productRoute(app);
authRoute(app);
app.get('/', async (req, res) => {
    
    res.send("<h1>hellow<h1>");
})




app.listen(port, async () => {
    await sequelize.sync()
    console.log(`server is listening to port ${port}`)
});





