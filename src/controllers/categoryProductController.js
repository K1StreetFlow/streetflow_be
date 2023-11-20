const { CategoryProduct, Product } = require("../models");

const ITEMS_PER_PAGE = 5;

const getAllCategoriesWithPagination = async (req, res) => {
  try {
    const page = req.query.page || 1; // Get page number from query parameter or default to 1
    const offset = (page - 1) * ITEMS_PER_PAGE;

    const categories = await CategoryProduct.findAndCountAll({
      limit: ITEMS_PER_PAGE,
      offset: offset,
    });

    const totalPages = Math.ceil(categories.count / ITEMS_PER_PAGE);

    res.json({
      categories: categories.rows,
      totalPages: totalPages,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryProduct.findAll();

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await CategoryProduct.findByPk(id);

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
    const newCategory = await CategoryProduct.create({ name_category_products });
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name_category_products } = req.body;

  try {
    const category = await CategoryProduct.findByPk(id);

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
  const { id } = req.params;

  try {
    const category = await CategoryProduct.findByPk(id);

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
  getAllCategoriesWithPagination,
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};