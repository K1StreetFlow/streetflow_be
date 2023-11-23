"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash("password123", 10);
    const hashedPassword2 = await bcrypt.hash("securepass456", 10);
    const hashedPassword3 = await bcrypt.hash("123", 10);
    await queryInterface.bulkInsert(
      "Users_customer",
      [
        {
          username: "customer1",
          email: "customer1@example.com",
          password: hashedPassword1,
          fullname: "Customer One",
          gender: "Male",
          birth_date: "1990-01-01",
          upload_photo: null,
          phone_number: 1234567890,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "customer2",
          email: "customer2@example.com",
          password: hashedPassword2,
          fullname: "Customer Two",
          gender: "Female",
          birth_date: "1985-05-15",
          upload_photo: null,
          phone_number: 9876543210,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "customer3",
          email: "customer3@example.com",
          password: hashedPassword2,
          fullname: "Customer Tree",
          gender: "Female",
          birth_date: "1985-05-15",
          upload_photo: null,
          phone_number: 9876543210,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users_customer", null, {});
  },
};
