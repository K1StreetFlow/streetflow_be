// seeders/20231110150000-category-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "CategoryProducts",
      [
        {
          name_category_products: "baju",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_category_products: "celana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_category_products: "jaket",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_category_products: "sepatu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CategoryProducts", null, {});
  },
};
