const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  getAllProductsWithPagination,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const { isAdmin } = require("../middleware/verifyToken.js");

// CRUD routes
router.get("/", getAllProducts);
// AKSES PAGINATION SAYA BIKIN 10 DATA YANG TAMPIL SETIAP PAGE
router.get("/pagination", getAllProductsWithPagination);
router.get("/:id", getProductById);
router.post("/", isAdmin, createProduct); // Use isAdminOrSelf middleware for createProduct
router.put("/:id", isAdmin, updateProduct); // Use isAdminOrSelf middleware for updateProduct
router.delete("/:id", isAdmin, deleteProduct); // Use isAdminOrSelf middleware for deleteProduct

module.exports = router;
