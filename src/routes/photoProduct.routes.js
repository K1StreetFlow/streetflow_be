// photoProduct.routes.js
const express = require("express");
const router = express.Router();
const {
  uploadPhoto,
  editPhoto,
  deletePhoto,
} = require("../controllers/photoProduct.controller");
const upload = require("../../multer-config.js");

router.post("/upload", upload.single("photo_product"), uploadPhoto);
router.put("/edit/:id", upload.single("photo_product"), editPhoto);
router.delete("/delete/:id", deletePhoto);

module.exports = router;
