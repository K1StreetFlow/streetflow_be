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

// CRUD routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", createProduct);
router.put("/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
