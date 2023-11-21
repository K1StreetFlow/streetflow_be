"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Address", [
      {
        street: "Jl. Jalan",
        house_number: "XI",
        zipcode: "111",
        city: "Bandung",
        province: "Jawa Barat",
        id_users_customer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        street: "Jl. Jalan Bunga",
        house_number: "X",
        zipcode: "222",
        city: "Surabaya",
        province: "Jawa Timur",
        id_users_customer: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
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
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Address", null, {});
  },
};
