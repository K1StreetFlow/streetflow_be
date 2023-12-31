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
        type: Sequelize.STRING,
      },
      status_payment: {
        type: Sequelize.ENUM("Pending", "Success", "Failed"),
      },
      total_payment: {
        type: Sequelize.INTEGER,
      },
      method_payment: {
        type: Sequelize.STRING,
      },
      va_number: {
        type: Sequelize.STRING,
      },
      va_type: {
        type: Sequelize.STRING,
      },
      pdf_url: {
        type: Sequelize.STRING,
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
