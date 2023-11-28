const express = require("express");
const {
  getReview,
  getReviewById,
  getReviewByRating,
  getReviewByUserId,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/review_product_controller");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", getReview); // Admin Side
router.get("/allReview", getReview); // Customer Side
router.get("/:id", getReviewById); // Admin Side
router.get("/user/", isCustomer, getReviewByUserId); // Customer Side
router.get("/rating/:rating", getReviewByRating); // Customer Side
// router.post("/user/", isCustomer, createReview);
router.post("/user/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
