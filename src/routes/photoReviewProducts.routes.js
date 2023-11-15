const express = require('express');
const router = express.Router();
const {
  getAllPhotoReviews,
  getPhotoByReviewId,
  uploadPhotoReview,
  updatePhotoReview,
  deletePhotoReview  
} = require('../controllers/uploadReviewProducts.controller');
const upload = require('../middleware/multeruploadReviewProducts');

router.get('/', getAllPhotoReviews);
router.get('/:id', getPhotoByReviewId);
router.post('/:id', upload.single('photo_review'), uploadPhotoReview);
router.put('/:id', upload.single('photo_review'), updatePhotoReview);
router.delete('/:id', deletePhotoReview);

module.exports = router;