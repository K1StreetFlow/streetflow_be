const express = require('express');
const { 
    getReview, 
    getReviewById, 
    getReviewByRating, 
    createReview, 
    updateReview, 
    deleteReview 
} = require('../controllers/review_product_controller');
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");
const router = express.Router();
router.use(isAdminOrSelf);

router.get("/", isAdmin, getReview);
router.get("/allReview", getReview) // Customer Side
router.get("/:id", isAdmin, getReviewById); 
router.get("/rating/:rating", getReviewByRating); // Customer Side
router.post("/", isCustomer, createReview);
router.put("/:id", isAdmin,updateReview);
router.delete("/:id", isAdmin,deleteReview);

module.exports = router;