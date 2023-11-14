"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Cart, {
        foreignKey: "id_cart",
        as: "cart",
      });
    }
  }
  Payment.init(
    {
      code_payment: DataTypes.STRING,
      date_payment: DataTypes.DATE,
      status_payment: DataTypes.ENUM("Pending", "Unpaid", "Success", "Failed"),
      total_payment: DataTypes.INTEGER,
      method_payment: DataTypes.ENUM("Transfer Bank", "E-Wallet", "M-Banking"),
      id_cart: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cart",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Payment",
      paranoid: true,
    }
  );
  return Payment;
};
