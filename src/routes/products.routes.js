// routes/products.routes.js
const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/products.controller");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");

// CRUD routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", verifyTokenCookieAdmin, createProduct);
router.put("/:id", verifyTokenCookieAdmin, updateProduct);
router.delete("/:id", verifyTokenCookieAdmin, deleteProduct);

module.exports = router;
