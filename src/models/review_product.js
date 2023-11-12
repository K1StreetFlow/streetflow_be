'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review_products.belongsTo(models.Users_customer, {
        foreignKey: "id_users_customer",
        as: "users_customer",
      });

      Review_products.belongsTo(models.Products, {
        foreignKey: "id_products",
        as: "products",
      });

      Review_products.belongsTo(models.Order_list, {
        foreignKey: "id_order_list",
        as: "order_list",
      })
    }
  }
  Review_products.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_users_customer: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    id_products: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    id_order_list: {
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
      type: DataTypes.STRING(200),
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
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Review_products',
    paranoid: true,
  });
  return Review_products;
};