const path = require("path");
const express = require("express");
const router = express.Router();
const { getAllPhotos, getPhotoById, uploadPhoto, editPhoto, deletePhoto } = require("../controllers/photoProduct.controller");
const upload = require("../middleware/multer-config.js");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");

router.get("/", getAllPhotos);

// Get photo by ID
router.get("/:id", getPhotoById);
// Handle the photo upload
router.post("/upload", verifyTokenCookieAdmin, upload.single("photo_product"), uploadPhoto);

// Handle photo update
router.put("/:id", verifyTokenCookieAdmin, upload.single("photo_product"), editPhoto);

// Handle photo deletion
router.delete("/:id", verifyTokenCookieAdmin, deletePhoto);

// Serve static files from the specified directory
router.get("/view/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "../../src/assets/images/products", req.params.filename));
});

module.exports = router;
