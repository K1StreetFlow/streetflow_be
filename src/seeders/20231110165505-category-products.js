// seeders/20231110150000-category-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "CategoryProducts",
      [
        { name_category_products: "Electronics" },
        { name_category_products: "Clothing" },
        { name_category_products: "Home and Living" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CategoryProducts", null, {});
  },
};
