"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_list extends Model {
    static associate(models) {
      Order_list.belongsTo(models.Payment, {
        foreignKey: "id_payment",
        as: "payment",
      });
      Order_list.belongsTo(models.Cart, {
        foreignKey: "id_cart_details",
        as: "cart",
      });
      Order_list.belongsTo(models.Users_customer, {
        foreignKey: "id_users_customer",
        as: "user_customer",
      });
      Order_list.hasMany(models.Review_products, {
        foreignKey: "id_order_list",
        as: "review_products",
      });
      Order_list.hasMany(models.Shipping, {
        foreignKey: "id_order_list",
        as: "shipping",
      });
    }
  }
  Order_list.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code_order: DataTypes.STRING,
      id_payment: DataTypes.INTEGER,
      id_cart_details: DataTypes.INTEGER,
      id_users_customer: DataTypes.INTEGER,
      status_order: {
        type: DataTypes.ENUM(
          "Unpaid",
          "Paid",
          "Packaged",
          "Delivered",
          "Completed",
          "Canceled"
        ),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Order_list",
      tableName: "Order_list",
      paranoid: true,
    }
  );
  return Order_list;
};
