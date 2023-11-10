"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Review_products", [
      {
        id_review: 1292,
        id_product: 1229,
        id_users_customer: 2129,
        message_review:
          "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga sukses selalu",
        number_review: 5,
        photo_review: "databaru.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id_review: 2229,
        id_product: 2229,
        id_users_customer: 2229,
        message_review:
          "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga berkah selalu",
        number_review: 5,
        photo_review: "databaru.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id_review: 3329,
        id_product: 3239,
        id_users_customer: 3329,
        message_review:
          "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga banyak order selalu",
        number_review: 5,
        photo_review: "databaru.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
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
