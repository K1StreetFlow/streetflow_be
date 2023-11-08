'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id_product: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      size_product: {
        type: Sequelize.ENUM('S', 'M', 'L', 'XL'),
        allowNull: false,
      },
      color_product: {
        type: Sequelize.ENUM('blue', 'black', 'grey'),
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
      created_At: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_At: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_At: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};