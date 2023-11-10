"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users_administrators",
      [
        {
          username: "admin1",
          email: "admin1@example.com",
          password: "password123",
          upload_photo: "admin1_photo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "admin2",
          email: "admin2@example.com",
          password: "securepass456",
          upload_photo: "admin2_photo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users_administrators", null, {});
  },
};
