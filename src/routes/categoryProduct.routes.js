const express = require("express");
const router = express.Router();
const {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} = require("../controllers/categoryProductController");

// CRUD routes
router.get("/", getAllCategories);
router.get("/:categoryId", getCategoryById);
router.post("/", createCategory);
router.put("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);

module.exports = router;

  