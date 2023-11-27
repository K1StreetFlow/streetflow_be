"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const carts = [
      {
        id_users_customer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_users_customer: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_users_customer: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_users_customer: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_users_customer: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_users_customer: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Carts", carts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
