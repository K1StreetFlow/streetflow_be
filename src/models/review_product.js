"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review_products extends Model {
    static associate(models) {}
  }

  Review_products.init(
    {
      id_review: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_product: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      id_users_customer: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      message_review: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      number_review: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      photo_review: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Review_products",
      paranoid: true,
    }
  );

  return Review_products;
};
