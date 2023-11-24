// seeders/20231110152000-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoryProductsQuery = await queryInterface.sequelize.query('SELECT id FROM "CategoryProducts"');
    const photoProductsQuery = await queryInterface.sequelize.query('SELECT id FROM "PhotoProducts"');

    // Mendapatkan hasil query sebagai array
    const categoryProducts = categoryProductsQuery[0];
    const photoProducts = photoProductsQuery[0];
    // Pastikan hasil query tidak kosong
    if (categoryProducts.length === 0 || photoProducts.length === 0) {
      console.error("Error: Empty result from categoryProducts or photoProducts query.");
      return;
    }

    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name_product: "Product 1",
          description_product: "Description for Product 1",
          price_product: 30000,
          stock_product: 50,
          size_product: "M",
          colour_product: "Black",
          id_category_product: categoryProducts[0].id,
          id_photo_product: photoProducts[0].id,
          slug_product: "product-1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_product: "Product 2",
          description_product: "Description for Product 2",
          price_product: 30000,
          stock_product: 30,
          size_product: "M",
          colour_product: "Black",
          id_category_product: categoryProducts[1].id,
          id_photo_product: photoProducts[1].id,
          slug_product: "product-2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_product: "Product 3",
          description_product: "Description for Product 3",
          price_product: 30000,
          stock_product: 20,
          size_product: "S",
          colour_product: "Black",
          id_category_product: categoryProducts[2].id,
          id_photo_product: photoProducts[2].id,
          slug_product: "product-3",
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
