"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    static associate(models) {
      CategoryProduct.hasMany(models.Product, {
        foreignKey: "id_category_products",
      });
    }
  }
  CategoryProduct.init(
    {
      name_category_products: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CategoryProduct",
      paranoid: true,
      timestamps: true,
    }
  );
  return CategoryProduct;
};
