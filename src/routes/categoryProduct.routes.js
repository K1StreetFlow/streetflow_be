// routes/categoryProductRoutes.js
const express = require("express");
const router = express.Router();
const categoryProductController = require("../controllers/categoryProductController");

// CRUD routes
router.get("/categories", categoryProductController.getAllCategories);
router.get(
  "/categories/:categoryId",
  categoryProductController.getCategoryById
);
router.post("/categories", categoryProductController.createCategory);
router.put("/categories/:categoryId", categoryProductController.updateCategory);
router.delete(
  "/categories/:categoryId",
  categoryProductController.deleteCategory
);

module.exports = router;
