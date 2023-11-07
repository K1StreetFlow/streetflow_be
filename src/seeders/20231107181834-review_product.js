'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Review_products', [
      {
        id_review: 1,
        id_product: 1,
        id_users_customer: 1,
        message_review: 'Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga sukses selalu',
        number_review: 5,
        photo_review: 'databaru.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id_review: 2,
        id_product: 2,
        id_users_customer: 2,
        message_review: 'Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga berkah selalu',
        number_review: 5,
        photo_review: 'databaru.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id_review: 3,
        id_product: 3,
        id_users_customer: 3,
        message_review: 'Pakaian sangat bagus, dan menarik, pengiriman cepat dan aman, semoga banyak order selalu',
        number_review: 5,
        photo_review: 'databaru.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
