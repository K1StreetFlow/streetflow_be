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
        id_cart: 2,
        id_product: 2,
        quantity: 3,
        total_price: 30000 * 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 3,
        id_product: 1,
<<<<<<< HEAD:src/seeders/20231108075248-cart_detail-seeder.js
        quantity: 3,
=======
        quantity: 1,
        total_price: 30000 * 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_cart: 1,
        id_product: 1,
        quantity: 1,
        total_price: 30000 * 1,
>>>>>>> 37e01d38e228a2e2fe1d7f357c9c6168151969c0:src/seeders/08-20231108075248-cart_detail-seeder.js
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
