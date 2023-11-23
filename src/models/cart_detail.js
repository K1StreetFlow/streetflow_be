"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart_detail.belongsTo(models.Cart, {
        foreignKey: "id_cart",
        as: "cart",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Cart_detail.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "product",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Cart_detail.init(
    {
      id_cart: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cart",
          key: "id",
        },
      },
      id_product: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      total_price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Cart_detail",
    }
  );
  return Cart_detail;
};
