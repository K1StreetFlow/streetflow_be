// routes/categoryProductRoutes.js
const express = require("express");
const router = express.Router();
const categoryProductController = require("../controllers/categoryProductController");
const { isAdmin } = require("../middleware/verifyToken");

// CRUD routes
router.get("/", categoryProductController.getAllCategories);
router.get("/:categoryId", categoryProductController.getCategoryById);
router.post("", isAdmin, categoryProductController.createCategory);
router.put("/:categoryId", isAdmin, categoryProductController.updateCategory);
router.delete(
  "/:categoryId",
  isAdmin,
  categoryProductController.deleteCategory
);

module.exports = router;
