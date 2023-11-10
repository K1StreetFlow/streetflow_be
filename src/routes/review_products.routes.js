const express = require('express');
const { getReviewProducts, getReviewProductById } = require('../controllers/review_product_controller');

const router = express.Router();

router.get("/", getReviewProducts);
router.get("/:id", getReviewProductById);

module.exports = router;