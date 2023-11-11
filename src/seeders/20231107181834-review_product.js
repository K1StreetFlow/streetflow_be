"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Review_products", [
      {
        id_review: 12392,
        id_product: 12329,
        id_users_customer: 32129,
        message_review:
          "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga sukses selalu",
        number_review: 5,
        photo_review: "databaru.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id_review: 23229,
        id_product: 32229,
        id_users_customer: 22239,
        message_review:
          "Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga berkah selalu",
        number_review: 5,
        photo_review: "databaru.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id_review: 33329,
        id_product: 32339,
        id_users_customer: 33329,
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
