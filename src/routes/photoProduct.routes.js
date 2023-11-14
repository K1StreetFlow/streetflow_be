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
const upload = require("../middleware/multer-config.js");
const { isAdminOrSelf } = require("../middleware/adminMiddleware.js");

router.get("/", getAllPhotos);
// pagination
// http://localhost:8000/api/photo_products?page=1

// Get photo by ID
router.get("/:id", getPhotoById);
// Handle the photo upload
router.post("/upload", isAdminOrSelf, upload.single("photo_product"), uploadPhoto);

// Handle photo update
router.put("/upload/:id", isAdminOrSelf, upload.single("photo_product"), editPhoto);

// Handle photo deletion
router.delete("/:id", isAdminOrSelf, deletePhoto);

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
