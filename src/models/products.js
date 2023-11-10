"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      id_product: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name_product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_product: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price_product: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size_product: {
        type: DataTypes.ENUM("S", "M", "L", "XL"),
        allowNull: false,
      },
      color_product: {
        type: DataTypes.ENUM("blue", "black", "grey"),
        allowNull: false,
      },
      id_category_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_photo_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      slug_product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_At: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_At: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_At: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Products",
      tableName: "Products",
      paranoid: true,
      createdAt: "created_At",
      updatedAt: "updated_At",
      deletedAt: "deleted_At",
    }
  );
  return Products;
};
