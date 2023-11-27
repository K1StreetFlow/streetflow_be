"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users_administrators",
      [
        {
          username: "kevin",
          email: "kevin@gmail.com",
          password: await bcrypt.hash("123", 10),
          upload_photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "raihan",
          email: "raihan@gmail.com",
          password: await bcrypt.hash("123", 10),
          upload_photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ricky",
          email: "ricky@gmail.com",
          password: await bcrypt.hash("123", 10),
          upload_photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "rizki",
          email: "rizki@gmail.com",
          password: await bcrypt.hash("123", 10),
          upload_photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "saeful",
          email: "saeful@gmail.com",
          password: await bcrypt.hash("123", 10),
          upload_photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "irul",
          email: "irul@gmail.com",
          password: await bcrypt.hash("123", 10),
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
