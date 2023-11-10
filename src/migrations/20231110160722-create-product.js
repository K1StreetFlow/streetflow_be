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
        type: Sequelize.STRING,
      },
      description_product: {
        type: Sequelize.TEXT,
      },
      price_product: {
        type: Sequelize.FLOAT,
      },
      stock_product: {
        type: Sequelize.INTEGER,
      },
      size_product: {
        type: Sequelize.ENUM("S", "M", "xl"),
      },
      colour_product: {
        type: Sequelize.ENUM("black", "Blue", "Green"),
      },
      id_category_products: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CategoryProducts",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      id_photo_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PhotoProducts",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      slug_product: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
