"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Review_products", [
      {
        id_review: 31,
        id_product: 11,
        id_users_customer: 31,
        message_review:
          "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga sukses selalu",
        number_review: 5,
        photo_review: "databaru.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id_review: 22,
        id_product: 12,
        id_users_customer: 32,
        message_review:
          "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga berkah selalu",
        number_review: 5,
        photo_review: "databaru.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id_review: 3,
        id_product: 3,
        id_users_customer: 3,
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
