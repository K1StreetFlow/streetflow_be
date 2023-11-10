"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users_customer",
      [
        {
          username: "customer1",
          email: "customer1@example.com",
          password: "password123",
          fullname: "Customer One",
          gender: "Male",
          birth_date: "1990-01-01",
          upload_photo: "customer1_photo.jpg",
          phone_number: 1234567890,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "customer2",
          email: "customer2@example.com",
          password: "securepass456",
          fullname: "Customer Two",
          gender: "Female",
          birth_date: "1985-05-15",
          upload_photo: "customer2_photo.jpg",
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
