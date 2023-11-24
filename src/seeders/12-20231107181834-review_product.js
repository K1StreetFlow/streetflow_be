"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Review_products", [
      {
        id_users_customer: 1,
        id_products: 1,
        id_order_list: 1,
        message_review: "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga sukses selalu",
        number_review: 5,
<<<<<<< HEAD:src/seeders/20231107181834-review_product.js
        photo_review: "Landak-Lucu.jpg",
=======
        photo_review: null,
>>>>>>> 37e01d38e228a2e2fe1d7f357c9c6168151969c0:src/seeders/12-20231107181834-review_product.js
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_users_customer: 2,
        id_products: 2,
        id_order_list: 2,
        message_review: "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga berkah selalu",
        number_review: 5,
<<<<<<< HEAD:src/seeders/20231107181834-review_product.js
        photo_review: "apapun.jpg",
=======
        photo_review: null,
>>>>>>> 37e01d38e228a2e2fe1d7f357c9c6168151969c0:src/seeders/12-20231107181834-review_product.js
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_users_customer: 2,
        id_products: 3,
        id_order_list: 3,
        message_review: "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga banyak order selalu",
        number_review: 4,
        photo_review: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
