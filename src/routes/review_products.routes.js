const express = require("express");
const {
  getReview,
  getReviewById,
  getReviewByRating,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/review_product_controller");
const { isAdmin, isAdminOrCustomer } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", isAdmin, getReview);
router.get("/:id", getReviewById);
router.get("/rating/:rating", getReviewByRating);
router.post("/", isAdminOrCustomer, createReview);
router.put("/:id", isAdminOrCustomer, updateReview);
router.delete("/:id", isAdmin, deleteReview);

module.exports = router;
