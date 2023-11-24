"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_product: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description_product: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price_product: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      stock_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      colour_product: {
        type: Sequelize.ENUM("Blue", "Black", "Grey"),
        allowNull: false,
      },
      size_product: {
        type: Sequelize.ENUM("S", "M", "L", "XL"),
        allowNull: false,
      },
      id_category_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_photo_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      slug_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
