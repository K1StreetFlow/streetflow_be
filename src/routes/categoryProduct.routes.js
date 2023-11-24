const express = require("express");
const router = express.Router();
const { getAllCategories, getCategoryById, createCategory, updateCategory, getAllCategoriesWithPagination, deleteCategory } = require("../controllers/categoryProductController");

const { isAdminOrSelf } = require("../middleware/adminMiddleware.js");

// CRUD routes

router.get("/", getAllCategories);
router.get("/pagination", getAllCategoriesWithPagination);
router.get("/:id", getCategoryById);
router.post("/", isAdminOrSelf, createCategory);
router.put("/:id", isAdminOrSelf, updateCategory);
router.delete("/:id", isAdminOrSelf, deleteCategory);

module.exports = router;
