// seeders/20231110151000-photo-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "PhotoProducts",
      [
        { photo_product: "image1.jpg" },
        { photo_product: "image2.jpg" },
        { photo_product: "image3.jpg" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PhotoProducts", null, {});
  },
};
