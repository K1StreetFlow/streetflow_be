"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Checkout_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Checkout_product.belongsTo(models.Cart, {
        foreignKey: "id_cart",
        as: "cart",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Checkout_product.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "product",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Checkout_product.belongsTo(models.Order_list, {
        foreignKey: "id_order",
        as: "order",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Checkout_product.init(
    {
      id_cart: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Cart",
          key: "id",
        },
      },
      id_product: DataTypes.INTEGER,
      id_order: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Order_list",
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
      total_price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Checkout_product",
    }
  );
  return Checkout_product;
};
