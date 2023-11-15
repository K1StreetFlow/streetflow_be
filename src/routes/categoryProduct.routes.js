// routes/categoryProductRoutes.js
const express = require("express");
const router = express.Router();
const categoryProductController = require("../controllers/categoryProductController");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");

// CRUD routes
router.get("/", categoryProductController.getAllCategories);
router.get("/:categoryId", categoryProductController.getCategoryById);
router.post("", verifyTokenCookieAdmin, categoryProductController.createCategory);
router.put("/:categoryId", verifyTokenCookieAdmin, categoryProductController.updateCategory);
router.delete("/:categoryId", verifyTokenCookieAdmin, categoryProductController.deleteCategory);

module.exports = router;
