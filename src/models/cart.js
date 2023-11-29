"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Users_customer, {
        foreignKey: "id_users_customer",
        as: "user_customer",
      });
      Cart.hasMany(models.Cart_detail, {
        foreignKey: "id_cart",
        as: "cart_detail",
      });
      Cart.hasOne(models.Payment, {
        foreignKey: "id_cart",
        as: "payment",
      });
      Cart.hasMany(models.Checkout_product, {
        foreignKey: "id_cart",
        as: "checkout_product",
      });
    }
  }
  Cart.init(
    {
      id_users_customer: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
