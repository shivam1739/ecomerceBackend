const express = require("express");
const { sequelize } = require("./models/index");
const categoryRoute = require("./routes/category.routes");
const productRoute = require("./routes/product.routes");
const authRoute = require("./routes/auth.routes");
const roleRoute = require("./routes/role.routes");
const cartRoute = require("./routes/order.routes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
console.log(process.env.MYSQL_ADDON_URI);

const app = express();
app.use(express.json());
// const jon = express.json();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

categoryRoute(app);
productRoute(app);
authRoute(app);
roleRoute(app);
cartRoute(app);
app.get("/", async (req, res) => {
  res.send("<h1>hellow<h1>");
});

app.listen(port, async () => {
  await sequelize.sync();
  console.log(`server is listening to port ${port}`);
});
