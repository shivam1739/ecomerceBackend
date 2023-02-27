"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const queryInterface = sequelize.getQueryInterface();

  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        foreignKey: {
          name: "category_id",
        },
      });
      this.belongsToMany(models.Order, {
        through: models.Order_Product,
        foreignKey: "productId",
        otherkey: "orderId",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      describtion: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      img: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  // queryInterface.addColumn("Products", "img", {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // });
  return Product;
};
