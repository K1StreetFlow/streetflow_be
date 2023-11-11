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
// router.post("/products", createProduct);
// router.put("/products/:id", updateProduct);
// router.delete("/products/:id", deleteProduct);

module.exports = router;
