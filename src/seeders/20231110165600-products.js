// seeders/20231110152000-products.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoryProductsQuery = await queryInterface.sequelize.query(
      'SELECT id FROM "CategoryProducts"'
    );
    const photoProductsQuery = await queryInterface.sequelize.query(
      'SELECT id FROM "PhotoProducts"'
    );

    // Mendapatkan hasil query sebagai array
    const categoryProducts = categoryProductsQuery[0];
    const photoProducts = photoProductsQuery[0];

    // Pastikan hasil query tidak kosong
    if (categoryProducts.length === 0 || photoProducts.length === 0) {
      console.error(
        "Error: Empty result from categoryProducts or photoProducts query."
      );
      return;
    }

    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name_product: "Product 1",
          description_product: "Description for Product 1",
          price_product: 29.99,
          stock_product: 50,
          size_product: "M",
          color_product: "black",
          id_category_product: categoryProducts[0].id,
          id_photo_product: photoProducts[0].id,
          slug_product: "product-1",
          created_At: new Date(),
          updated_At: new Date(),
        },
        {
          name_product: "Product 2",
          description_product: "Description for Product 2",
          price_product: 39.99,
          stock_product: 30,
          size_product: "L",
          color_product: "black",
          id_category_product: categoryProducts[1].id,
          id_photo_product: photoProducts[1].id,
          slug_product: "product-2",
          created_At: new Date(),
          updated_At: new Date(),
        },
        {
          name_product: "Product 3",
          description_product: "Description for Product 3",
          price_product: 49.99,
          stock_product: 20,
          size_product: "S",
          color_product: "blue",
          id_category_product: categoryProducts[2].id,
          id_photo_product: photoProducts[2].id,
          slug_product: "product-3",
          created_At: new Date(),
          updated_At: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
