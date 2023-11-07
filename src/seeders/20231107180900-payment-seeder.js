"use strict";

const payment = require("../models/payment");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const getAllPayments = [
      {
        number_payment: "PAY-001",
        date_payment: new Date(),
        status_payment: "Pending",
        total_payment: 100000,
        method_payment: "Transfer Bank",
        id_cart: 1,
        id_cart_details: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number_payment: "PAY-002",
        date_payment: new Date(),
        status_payment: "Failed",
        total_payment: 200000,
        method_payment: "E-Wallet",
        id_cart: 2,
        id_cart_details: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number_payment: "PAY-003",
        date_payment: new Date(),
        status_payment: "Success",
        total_payment: 300000,
        method_payment: "M-Banking",
        id_cart: 3,
        id_cart_details: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("Payments", getAllPayments, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
