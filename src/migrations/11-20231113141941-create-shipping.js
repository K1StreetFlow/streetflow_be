"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shipping", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_courier: {
        type: Sequelize.STRING,
      },
      receipt_number: {
        type: Sequelize.STRING,
      },
      id_order_list: {
        type: Sequelize.INTEGER,
        references: {
          model: "Order_list",
          key: "id",
        },
      },
      id_address: {
        type: Sequelize.INTEGER,
        references: {
          model: "Address",
          key: "id",
        },
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
    await queryInterface.dropTable("Shipping");
  },
};
