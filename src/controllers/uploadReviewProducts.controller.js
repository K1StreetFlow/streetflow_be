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

        res.status(200).json(allPhotos).message('Get All Photo Reviews Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getPhotoByReviewId = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review_products.findByPk(id, {
            attributes: ['photo_review'],
        });

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json(review).message(`Get Photo Successfully at ID: ${id}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const uploadPhotoReview = async (req, res) => {
    try {
        const filePath = req.file.path; // Use req.file.path instead of req.file.filePath

        const reviewId = req.params.id;

        const existingReview = await Review_products.findByPk(reviewId);

        if (!existingReview) {
            return res.status(404).json({
                success: false,
                error: `Review with ID ${reviewId} not found`,
            });
        }

        const uploadPhoto = await Review_products.update(
            { photo_review: filePath },
            { where: { id: reviewId }},
        );

        console.info(uploadPhoto);
        res.status(200).json(uploadPhoto).message(`Upload Photo Successfully at ID: ${reviewId}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            error: 'Internal Server Error'
        });
    }
};


const updatePhotoReview = async (req, res) => {
    try {
        const filePath = req.file.path;

        const reviewId = req.params.id;

        const existingReview = await Review_products.findByPk(reviewId);

        if (!existingReview) {
            return res.status(404).json({
                success: false,
                error: `Review with ID ${reviewId} not found`,
            });
        }

        // Update the photo_review attribute
        existingReview.photo_review = filePath;
        existingReview.updatedAt = new Date();
        const updatedPhoto = await existingReview.save();

        res.status(200).json(updatedPhoto).message(`Updated Photo Successfully at ID: ${reviewId}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};


const deletePhotoReview = async (req, res) => {
    try {
        const reviewId = req.params.id;

        const existingReview = await Review_products.findByPk(reviewId);

        if (!existingReview) {
            return res.status(404).json({
                success: false,
                error: `Review with ID ${reviewId} not found`,
            });
        }

        // Delete the photo_review attribute
        existingReview.photo_review = null; // Or set to an appropriate default value
        existingReview.updatedAt = new Date();
        await existingReview.save();

        res.status(200).json(existingReview).message(`Delete Photo Review Successfully in ID: ${reviewId}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};



module.exports = {
    getAllPhotoReviews,
    getPhotoByReviewId,
    uploadPhotoReview,
    updatePhotoReview,
    deletePhotoReview
}