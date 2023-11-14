// controllers/products.controller.js
const { Product, CategoryProduct, PhotoProduct } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: CategoryProduct,
          as: "category",
          // attributes: ["id_category_product"],
        },
        {
          model: PhotoProduct,
          as: "photo",
          attributes: ["photo_product"],
        },
      ],
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: CategoryProduct,
          as: "category",
          // attributes: ["id_category_products"],
        },
        {
          model: PhotoProduct,
          as: "photo",
          attributes: ["photo_product"],
        },
      ],
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createProduct = async (req, res) => {
  const {
    name_product,
    description_product,
    price_product,
    stock_product,
    size_product,
    colour_product, // Change from color_product to colour_product
    id_category_product,
    id_photo_product,
    slug_product,
  } = req.body;

  try {
    const newProduct = await Product.create({
      name_product,
      description_product,
      price_product,
      stock_product,
      size_product,
      colour_product, // Change from color_product to colour_product
      id_category_product,
      id_photo_product,
      slug_product,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to create product", details: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name_product,
    description_product,
    price_product,
    stock_product,
    size_product,
    colour_product, // Corrected attribute name
    id_category_product,
    id_photo_product,
    slug_product,
  } = req.body;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.update({
      name_product,
      description_product,
      price_product,
      stock_product,
      size_product,
      colour_product, // Corrected attribute name
      id_category_product,
      id_photo_product,
      slug_product,
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to update product", details: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};