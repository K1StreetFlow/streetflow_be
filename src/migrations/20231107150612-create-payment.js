"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code_payment: {
        type: Sequelize.STRING,
      },
      date_payment: {
        type: Sequelize.DATE,
      },
      status_payment: {
        type: Sequelize.ENUM("Pending", "Unpaid", "Success", "Failed"),
      },
      total_payment: {
        type: Sequelize.INTEGER,
      },
      method_payment: {
        type: Sequelize.ENUM("Transfer Bank", "E-Wallet", "M-Banking"),
      },
      id_cart: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Payments");
  },
};
