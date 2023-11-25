// seeders/20231110151000-photo-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "PhotoProducts",
      [
        {
          photo_product: "BAJU1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU2.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU3.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU4.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU5.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU6.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU7.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU8.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU9.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU10.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "BAJU11.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA2.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA3.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA4.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA5.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA6.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA7.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA8.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA9.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "CELANA10.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE2.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE3.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE4.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE5.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE6.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE7.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE8.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE9.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE10.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo_product: "HOODIE11.png",
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
