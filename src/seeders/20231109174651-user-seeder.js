"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cart_detail = [
      {
        username: "kevinmpandoh",
        email: "kevinmpandoh@gmail.com",
        password: "mc465800",
        fullname: "Kevin M Pandoh",
        telepon: "081234567890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "mesiasi",
        email: "mesiasi@gmail.com",
        password: "mesiasi123",
        fullname: "Mesiasi Supit",
        telepon: "081234567890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "tes",
        email: "tes@gmail.com",
        password: "tes",
        telepon: "081234567890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Users", cart_detail, {});
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
