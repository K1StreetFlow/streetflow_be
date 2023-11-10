// models/product.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.CategoryProduct, {
        foreignKey: "id_category_products",
      });
      Product.belongsTo(models.PhotoProduct, {
        foreignKey: "id_photo_product",
      });
    }
  }
  Product.init(
    {
      name_product: DataTypes.STRING,
      description_product: DataTypes.TEXT,
      price_product: DataTypes.FLOAT,
      stock_product: DataTypes.INTEGER,
      size_product: {
        type: DataTypes.ENUM,
        values: ["S", "M", "xl"],
      },
      colour_product: {
        type: DataTypes.ENUM,
        values: ["black", "Blue", "Green"],
      },
      id_category_products: DataTypes.INTEGER,
      id_photo_product: DataTypes.INTEGER,
      slug_product: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      paranoid: true,
      timestamps: true,
    }
  );
  return Product;
};
