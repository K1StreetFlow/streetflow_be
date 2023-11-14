const express = require('express');
const { 
    getReview, 
    getReviewById, 
    getReviewByRating, 
    createReview, 
    updateReview, 
    deleteReview 
} = require('../controllers/review_product_controller');
const router = express.Router();

router.get("/", getReview);
router.get("/:id", getReviewById);
router.get("/rating/:rating", getReviewByRating);
router.post("/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;