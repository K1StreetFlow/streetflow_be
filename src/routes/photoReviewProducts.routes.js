const path = require("path");
const express = require("express");
const router = express.Router();
const {
	getAllPhotoReviews,
	getPhotoByReviewId,
	uploadPhotoReview,
	updatePhotoReview,
	deletePhotoReview,
} = require("../controllers/uploadReviewProducts.controller");
const upload = require("../middleware/multerUploadReviewProducts");

router.get("/", getAllPhotoReviews);
router.get("/:id", getPhotoByReviewId);
router.post("/:id", upload.single("photo_review"), uploadPhotoReview);
router.put("/:id", upload.single("photo_review"), updatePhotoReview);
router.delete("/:id", deletePhotoReview);

router.get("/view/:filename", (req, res) => {
	res.sendFile(path.join(__dirname, "../assets/images/review-products", req.params.filename));
});

module.exports = router;
