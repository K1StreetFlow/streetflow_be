"use strict";

const payment = require("../models/payment");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const getAllPayments = [
      {
        code_payment: "PAY-001",
        date_payment: "2023-11-20 17:49:28",
        status_payment: "Failed",
        total_payment: 200000,
        method_payment: "E-Wallet",
        va_number: "123456789",
        va_type: "BCA",
        pdf_url: "https://www.tes.com",
        id_cart: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code_payment: "PAY-002",
        date_payment: "2023-11-20 17:49:28",
        status_payment: "Failed",
        total_payment: 150000,
        method_payment: "E-Wallet",
        va_number: "123456789",
        va_type: "Bri",
        pdf_url: "https://www.tes.com",
        id_cart: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code_payment: "PAY-003",
        date_payment: "2023-11-20 17:49:28",
        status_payment: "Failed",
        total_payment: 56000,
        method_payment: "E-Wallet",
        va_number: "123456789",
        va_type: "BNI",
        pdf_url: "https://www.tes.com",
        id_cart: 4,
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
