const express = require('express');
const router = express.Router();
const {
  getAllPhotoReviews,
  getPhotoByReviewId,
  uploadPhotoReview,
  updatePhotoReview,
  deletePhotoReview  
} = require('../controllers/uploadReviewProducts.controller');
const upload = require('../middleware/uploadReviewProducts');

router.get('/photo', getAllPhotoReviews);
router.get('/photo/:id', getPhotoByReviewId);
router.post('/photo/', upload.array('photo', 5), uploadPhotoReview);
router.put('/photo/:id', upload.array('photo', 5), updatePhotoReview);
router.delete('/photo/:id', deletePhotoReview);

module.exports = router;