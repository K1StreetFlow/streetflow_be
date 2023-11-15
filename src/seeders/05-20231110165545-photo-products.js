// seeders/20231110151000-photo-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "PhotoProducts",
      [
        {
          photo_product: "image1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "image2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "image3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PhotoProducts", null, {});
  },
};
