"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cart_detail = [
      {
        id_cart: 1,
        id_product: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 2,
        id_product: 2,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 2,
        id_product: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Cart_details", cart_detail, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cart_details", null, {});
  },
};
