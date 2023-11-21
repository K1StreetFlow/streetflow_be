// routes/products.routes.js
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const { isAdmin } = require("../middleware/verifyToken");

// CRUD routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", isAdmin, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", isAdmin, deleteProduct);

module.exports = router;
