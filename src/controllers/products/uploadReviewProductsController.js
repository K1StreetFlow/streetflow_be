const { Review_products } = require('../../models');

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
            attributes: ['photo_review'],
        });

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({
            photo_review: review.photo_review
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const uploadPhotoReview = async (req, res) => {
    try {
        const { filename } = req.file; // Use req.file.path instead of req.file.filePath

        const reviewId = req.params.id;

        const existingReview = await Review_products.findByPk(reviewId);

        if (!existingReview) {
            return res.status(404).json({
                success: false,
                error: `Review with ID ${reviewId} not found`,
            });
        }

        const uploadPhoto = await Review_products.update(
            { photo_review: filename },
            { where: { id: reviewId }},
        );

        console.info(uploadPhoto);
        res.status(200).json({
            success: true,
            message: `Upload Photo Successfully in ID: ${reviewId}`,
            data: uploadPhoto
        });
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
        const { filename } = req.file;

        const reviewId = req.params.id;

        const existingReview = await Review_products.findByPk(reviewId);

        console.log(existingReview);
        if (!existingReview) {
            return res.status(404).json({
                success: false,
                error: `Review with ID ${reviewId} not found`,
            });
        }
        // Update the photo_review attribute
        existingReview.photo_review = filename;
        existingReview.updatedAt = new Date();
        await existingReview.save();

        res.status(200).json({
            success: true,
            message: `Update Photo Review Successfully in ID: ${reviewId}`,
            data: existingReview,
        });
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

        res.status(200).json({
            success: true,
            message: `Delete Photo Review Successfully in ID: ${reviewId}`,
            data: existingReview,
        });
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
