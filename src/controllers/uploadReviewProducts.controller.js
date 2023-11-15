const { Review_products } = require('../models');

const getAllPhotoReviews = async (req, res) => {
    try {
        const allReviews = await Review_products.findAll({
            attributes: ['id', 'photo_review'],
        });

        const allPhotos = allReviews.map((review) => ({
            id: review.id,
            photo_review: review.photo_review
        }));

        res.status(200).json({
            message: 'Get All Photo Reviews Successfully',
            data: allPhotos
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getPhotoByReviewId = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review_products.findByPk(id, {
            attributes: ['id', 'photo_review'],
        });

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({
            id: review.review.id,
            photo_review: review.photo_review
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const uploadPhotoReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review_products.findByPk(id);
        
        if (!review) {
            return res.status(404).json({ error: 'Review not found'});
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No photo uploaded'});
        }

        const photo = req.file.buffer.toString('base64');

        const reviews = await review.update({ photo_review: photo });

        res.status(200).json({
            message: 'Photo Uploaded Successfully',
            data: reviews
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updatePhotoReview = async (req, res) => {
    const { id } = req.params;

    try {
        const review = await Review_products.findByPk(id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found'});
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No photo uploaded'});
        }

        const photo = req.file.buffer.toString('base64');

        const updatedPhoto = await review.update({ photo_review: photo });
        res.status(200).json({
            message: 'Photo Updated Successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deletePhotoReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review_products.findByPk(id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        const deletedPhoto = await review.update({ photo_review: null });

        res.status(200).json({ message: 'Photo Deleted Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllPhotoReviews,
    getPhotoByReviewId,
    uploadPhotoReview,
    updatePhotoReview,
    deletePhotoReview
}