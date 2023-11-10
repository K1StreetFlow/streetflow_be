const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const router = express.Router();

// Rute untuk mendapatkan semua produk
router.get("/", getAllProducts);

// Rute untuk mendapatkan produk berdasarkan ID
router.get("/:id", getProductById);

// Rute untuk membuat produk baru
router.post("/", createProduct);

// Rute untuk mengupdate produk berdasarkan ID
router.put("/:id", updateProduct);

// Rute untuk menghapus produk berdasarkan ID
router.delete("/:id", deleteProduct);

module.exports = router;
