// routes/categoryProductRoutes.js
const express = require("express");
const router = express.Router();
const categoryProductController = require("../controllers/categoryProductController");

// CRUD routes
router.get("/", categoryProductController.getAllCategories);
router.get("/:categoryId", categoryProductController.getCategoryById);
router.post("", categoryProductController.createCategory);
router.put("/:categoryId", categoryProductController.updateCategory);
router.delete("/:categoryId", categoryProductController.deleteCategory);

module.exports = router;
