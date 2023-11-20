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
      });
      Cart_detail.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "product",
      });
    }
  }
  Cart_detail.init(
    {
      id_cart: DataTypes.INTEGER,
      id_product: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart_detail",
    }
  );
  return Cart_detail;
};
