// controllers/categoryProductController.js
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

    // res.json({
    //   categories: categories.rows,
    //   totalPages: totalPages,
    //   currentPage: parseInt(page),
    // });
    res.status(200).json(totalPages)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryProduct.findAll();

    res.json(categories).message("Get All Categories Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getCategoryById = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await CategoryProduct.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category).message(`Get Category Succesfully at ID: ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  const { name_category_products } = req.body;

  try {
    const newCategory = await CategoryProduct.create({ name_category_products });
    res.status(201).json(newCategory).message("Created Category Succesfully");
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

    res.status(201).json(category).message(`Updated Category Succesfully at ID: ${categoryId}`);
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

    res.status(201).json(category).message(`Deleted Category Successfully at ID: ${categoryId}`);
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

