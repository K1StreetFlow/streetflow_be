"use strict";

const payment = require("../models/payment");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const getAllPayments = [
      {
        code_payment: "PAY-001",
        date_payment: new Date(),
        status_payment: "Pending",
        total_payment: 100000,
        method_payment: "Transfer Bank",
        id_cart: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code_payment: "PAY-002",
        date_payment: new Date(),
        status_payment: "Failed",
        total_payment: 200000,
        method_payment: "E-Wallet",
        id_cart: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code_payment: "PAY-003",
        date_payment: new Date(),
        status_payment: "Success",
        total_payment: 300000,
        method_payment: "M-Banking",
        id_cart: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("Payments", getAllPayments, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Payments", null, {});
  },
};
