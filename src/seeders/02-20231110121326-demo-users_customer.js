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
          username: "kevin",
          email: "kevin@gmail.com",
          password: await bcrypt.hash("123", 10),
          fullname: "Kevin Pandoh",
          gender: "Male",
          birth_date: "1990-01-01",
          upload_photo: null,
          phone_number: "089510465800",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "raihan",
          email: "raihan@gmail.com",
          password: await bcrypt.hash("123", 10),
          fullname: "Muhammad Raihan",
          gender: "Male",
          birth_date: "1985-05-15",
          upload_photo: null,
          phone_number: "089612387232",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ricky",
          email: "ricky@gmail.com",
          password: await bcrypt.hash("123", 10),
          fullname: "ALVIANO RICKY SETYAWAN",
          gender: "Male",
          birth_date: "1985-05-15",
          upload_photo: null,
          phone_number: "089612387232",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "irul",
          email: "irul@gmail.com",
          password: await bcrypt.hash("123", 10),
          fullname: "MUHAMMAD KHOIRUL ARIFIN",
          gender: "Male",
          birth_date: "1985-05-15",
          upload_photo: null,
          phone_number: "089612387232",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "rizki",
          email: "rizki@gmail.com",
          password: await bcrypt.hash("123", 10),
          fullname: "Rizki Rifaeni",
          gender: "Male",
          birth_date: "1985-05-15",
          upload_photo: null,
          phone_number: "089612387232",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "saeful",
          email: "saeful@gmail.com",
          password: await bcrypt.hash("123", 10),
          fullname: "SAEFUL MU’MININ",
          gender: "Male",
          birth_date: "1985-05-15",
          upload_photo: null,
          phone_number: "089612387232",
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
