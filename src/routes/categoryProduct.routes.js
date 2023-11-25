const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  getAllCategoriesWithPagination,
  deleteCategory,
} = require("../controllers/categoryProductController");

const { isAdminOrSelf } = require("../middleware/adminMiddleware.js");
const { isAdmin } = require("../middleware/verifyToken.js");

// CRUD routes

router.get("/", getAllCategories);
router.get("/pagination", getAllCategoriesWithPagination);
router.get("/:id", getCategoryById);
router.post("/", isAdmin, createCategory);
router.put("/:id", isAdmin, updateCategory);
router.delete("/:id", isAdmin, deleteCategory);

module.exports = router;
