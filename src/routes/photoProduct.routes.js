const path = require("path");
const express = require("express");
const router = express.Router();
const {
  getAllPhotos,
  getPhotoById,
  uploadPhoto,
  editPhoto,
  deletePhoto,
} = require("../controllers/photoProduct.controller");
const upload = require("../../multer-config.js");

router.get("/", getAllPhotos);

// Get photo by ID
router.get("/:id", getPhotoById);
// Handle the photo upload
router.post("/upload", upload.single("photo_product"), uploadPhoto);

// Handle photo update
router.put("/:id", upload.single("photo_product"), editPhoto);

// Handle photo deletion
router.delete("/:id", deletePhoto);

// Serve static files from the specified directory
router.get("/view/:filename", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../../src/assets/images/products",
      req.params.filename
    )
  );
});

module.exports = router;
