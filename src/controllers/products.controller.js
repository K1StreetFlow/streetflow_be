// controllers/products.controller.js
const { Product, CategoryProduct, PhotoProduct } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [CategoryProduct, PhotoProduct],
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
      include: [CategoryProduct, PhotoProduct],
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
    color_product,
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
      color_product,
      id_category_product,
      id_photo_product,
      slug_product,
      created_at: new Date(),
      updated_at: new Date(),
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
    color_product,
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
      color_product,
      id_category_product,
      id_photo_product,
      slug_product,
      updated_at: new Date(),
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
