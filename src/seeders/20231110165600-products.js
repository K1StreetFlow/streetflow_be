// seeders/20231110152000-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoryProducts = await queryInterface.sequelize.query(
      'SELECT id FROM "CategoryProducts"'
    );
    const photoProducts = await queryInterface.sequelize.query(
      'SELECT id FROM "PhotoProducts"'
    );

    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name_product: "Product 1",
          description_product: "Description for Product 1",
          price_product: 29.99,
          stock_product: 50,
          size_product: "M",
          colour_product: "black",
          id_category_products: categoryProducts[0][0].id,
          id_photo_product: photoProducts[0][0].id,
          slug_product: "product-1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
