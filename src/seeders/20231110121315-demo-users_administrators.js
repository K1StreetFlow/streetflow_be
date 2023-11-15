"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash("password123", 10);
    const hashedPassword2 = await bcrypt.hash("securepass456", 10);
    await queryInterface.bulkInsert(
      "Users_administrators",
      [
        {
          username: "admin1",
          email: "admin1@example.com",
          password: hashedPassword1,
          upload_photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "admin2",
          email: "admin2@example.com",
          password: hashedPassword2,
          upload_photo: null,
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
