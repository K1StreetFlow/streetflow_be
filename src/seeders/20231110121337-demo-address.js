"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Address",
      [
        {
          id_users_customer: 1,
          street: "123 Main Street",
          house_number: "Apt 4B",
          zipcode: "12345",
          city: "Cityville",
          province: "Stateville",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_users_customer: 2,
          street: "456 Oak Avenue",
          house_number: "Unit 8",
          zipcode: "67890",
          city: "Townsville",
          province: "Countyville",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Address", null, {});
  },
};