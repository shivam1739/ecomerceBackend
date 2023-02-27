"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const queryInterface = sequelize.getQueryInterface();
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        foreignKey: "category_id",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      describtion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  // queryInterface.addColumn("Categories", "img", {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // });
  return Category;
};
