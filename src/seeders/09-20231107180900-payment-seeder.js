"use strict";

const payment = require("../models/payment");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const getAllPayments = [
      {
        code_payment: "TES10",
        date_payment: "2023-11-20 17:49:28",
        status_payment: "Success",
        total_payment: 100000,
        method_payment: "Transfer Bank",
        va_number: "123456789",
        va_type: "BCA",
        pdf_url: "https://www.tes.com",
        id_cart: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code_payment: "TES-101",
        date_payment: "2023-11-20 17:49:28",
        status_payment: "Failed",
        total_payment: 300000,
        method_payment: "M-Banking",
        va_number: "123456789",
        va_type: "Bri",
        pdf_url: "https://www.tes.com",
        id_cart: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code_payment: "TES-008",
        date_payment: "2023-11-20 17:49:28",
        status_payment: "Failed",
        total_payment: 200000,
        method_payment: "E-Wallet",
        va_number: "123456789",
        va_type: "Dana",
        pdf_url: "https://www.tes.com",
        id_cart: 2,
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
