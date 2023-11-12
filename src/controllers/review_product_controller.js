const { Review_products, Order_list } = require('../models');
const upload = require('../config/multer.config')

const getReview = async (req, res) => {
    try {
        const reviews = await Review_products.findAll();

        if (reviews.length > 0) {
            res.status(200).json({
                message: 'Get All Review Successfully',
                data: reviewProducts,
            });
        } else {
            res.status(404).json({
                message: "Review not found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review_products.findByPk(id);

        if (review) {
            res.status(200).json({
                message: `Get Review by ID: ${id} Successfully`,
                data: review
            });
        } else {
            res.status(404).json({ message: `Get Review by ID ${id} Failed`});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

const getReviewByRating = async (req, res) => {
    try {
        const { rating } = req.params;
        const reviews = await Review_products.findAll({
            where: {
                number_review: rating,
            }
        });

        if (reviews.length > 0) {
            res.status(200).json({
                message: `Get Reviews with Rating ${rating} Successfully`,
                data: reviews,
            });
        } else {
            res.status(404).json({ message: `Review with Rating ${rating} Failed`});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error"});
    }
}

const createReview = async (req, res) => {
    try {
        const { id_order_list, id_products, id_users_customer, message_review, number_review } = req.body;

        const order = await Order_list.findByPk(id_order_list);

        
        // Cek apakah order sudah selesai
        if (!order || order.status_order !== 'Finished') {
            return res.status(400).json({
                message: "Order not finished or not found"
            });
        }

        // Cek apakah review sudah pernah dibuat untuk produk yang sama oleh pelanggan yang sama
        const existingReview = await Review_products.findOne({
            where: {
                id_products,
                id_users_customer,
            }
        });

        if (existingReview) {
            return res.status(400).json({ message: "Review for this product already exists"});
        }

        // Menggunakan middleware multer untuk mengunggah file
        upload(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Error uploading photo"});
            }
            
            const reviewProducts = await Review_products.create({
                id_products,
                id_users_customer,
                id_order_list,
                message_review,
                number_review,
                photo_review
            });

            if (reviewProducts) {
                res.status(201).json({
                    message: "Create Review Products Succesfully",
                    data: reviewProducts
                });
            } else {
                res.status(400).json({
                    message: "Create Review Products Failed"
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error "})
    }
};

const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { message_review, number_review } = req.body

        // Cek apakah review sudah ada
        const review = await Review_products.findByPk(id);

        if (!review) {
            return res.status(404).json({ message: "Review not found"});
        }

        // Menggunakan middleware multer untuk mengunggah file
        upload(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Error uploading file"});
            }

            await review.update({
                // Melakukan update atribut yang diizinkan 
                message_review: message_review,
                number_review: number_review,
                photo_review: req.file ? req.files.map(file => file.buffer) : review.photo_review,
            });

            res.status(200).json({
                message: "Update Review Successfully",
                data: review,
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error"});
    }
}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review_products.findByPk(id);

        if (!review) {
            return res.status(404).json({ message: "Review not found"});
        }

        await review.destroy();

        res.status(200).json({
            message: `Deleted Review By ID: ${id} Successfully `,
            data: review
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error"});        
    }
}

module.exports = {
    getReview,
    getReviewById,
    getReviewByRating,
    createReview,
    updateReview,
    deleteReview
};