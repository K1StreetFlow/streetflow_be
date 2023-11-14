const express = require("express");
const router = express.Router();
const {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} = require("../controllers/categoryProductController");

const { isAdminOrSelf } = require("../middleware/adminMiddleware.js");

// CRUD routes

router.get("/", getAllCategories);
// pagination
http://localhost:8000/api/category_products?page=1
router.get("/:id", getCategoryById);
router.post("/", isAdminOrSelf, createCategory);
router.put("/:id", isAdminOrSelf, updateCategory);
router.delete("/:id", isAdminOrSelf, deleteCategory);

module.exports = router;
