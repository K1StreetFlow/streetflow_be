"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Order_list", [
      {
        code_order: "TS-001",
        id_payment: 1,
        id_cart_details: 2,
        id_users_customer: 2,
        status_order: "Unpaid",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        code_order: "TS-002",
        id_payment: 2,
        id_cart_details: 3,
        id_users_customer: 3,
        status_order: "Completed",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        code_order: "TS-003",
        id_payment: 3,
        id_cart_details: 4,
        id_users_customer: 4,
        status_order: "Completed",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Order_list", null, {});
  },
};
