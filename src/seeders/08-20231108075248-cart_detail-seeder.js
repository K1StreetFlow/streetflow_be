"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const product1 = await queryInterface.sequelize.query(
      'SELECT price_product FROM "Products" WHERE id = 1'
    );
    const product2 = await queryInterface.sequelize.query(
      'SELECT price_product FROM "Products" WHERE id = 2'
    );

    const cart_detail = [
      {
        id_cart: 1,
        id_product: 1,
        quantity: 1,
        total_price: 32000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 1,
        id_product: 6,
        quantity: 1,
        total_price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 1,
        id_product: 2,
        quantity: 1,
        total_price: 43000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 2,
        id_product: 3,
        quantity: 1,
        total_price: 49000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 2,
        id_product: 4,
        quantity: 1,
        total_price: 28000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 3,
        id_product: 5,
        quantity: 1,
        total_price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 3,
        id_product: 6,
        quantity: 1,
        total_price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 4,
        id_product: 7,
        quantity: 1,
        total_price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 4,
        id_product: 10,
        quantity: 1,
        total_price: 82000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 4,
        id_product: 6,
        quantity: 1,
        total_price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 5,
        id_product: 8,
        quantity: 1,
        total_price: 23000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 6,
        id_product: 10,
        quantity: 1,
        total_price: 82000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 6,
        id_product: 7,
        quantity: 1,
        total_price: 55000,
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
