'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Review_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_users_customer: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users_customer",
          key: "id"
        }
      },
      id_products: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        }
      },
      id_order_list: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Order_list",
          key: "id",
        }
      },
      message_review: {
        type: Sequelize.TEXT
      },
      number_review: {
        type: Sequelize.INTEGER
      },
      photo_review: {
        type: Sequelize.STRING(200)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Review_products');
  }
};