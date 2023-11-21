// controllers/categoryProductController.js
const { CategoryProduct, Product } = require("../models");

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryProduct.findAll({
      include: Product, // Melibatkan model Product untuk mendapatkan produk yang terkait
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCategoryById = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await CategoryProduct.findByPk(categoryId, {
      include: Product,
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  const { name_category_products } = req.body;

  try {
    const newCategory = await CategoryProduct.create({
      name_category_products,
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name_category_products } = req.body;

  try {
    const category = await CategoryProduct.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.update({ name_category_products });

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await CategoryProduct.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.destroy();

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
