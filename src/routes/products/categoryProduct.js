const express = require("express");
const router = express.Router();
const { 
    getAllCategories, 
    getCategoryById, 
    createCategory, 
    updateCategory, 
    getAllCategoriesWithPagination, 
    deleteCategory
} = require("../../controllers/products/categoryProductController");

// CRUD routes

router.get("/", getAllCategories);
router.get("/pagination", getAllCategoriesWithPagination);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
