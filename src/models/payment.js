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
      // define association here
      Payment.belongsTo(models.User, {
        foreignKey: "id_users",
        as: "user",
      });
      Payment.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "product",
      });
    }
  }
  Payment.init(
    {
      number_payment: DataTypes.VARCHAR,
      date_payment: DataTypes.DATE,
      status_payment: DataTypes.ENUM("Pending", "Unpaid", "Success", "Failed"),
      total_payment: DataTypes.INTEGER,
      method_payment: DataTypes.ENUM("Transfer Bank", "E-Wallet", "M-Banking"),
      id_cart: {
        type: DataTypes.INTEGER,
        references: {
          model: "Carts",
          key: "id",
        },
      },

      id_cart_details: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cart_details",
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
