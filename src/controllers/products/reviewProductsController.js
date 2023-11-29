const { Review_products, Users_customer, Product, PhotoProduct, Order_list } = require('../../models');


const getReview = async (req, res) => {
    try {
        const reviews = await Review_products.findAll({
            include: [
                { model: Users_customer, as: 'user_customer', attributes: ['fullname'],},
                { 
                    model: Product, 
                    as: 'products', 
                    attributes: ['name_product'],
                    include : [
                        {
                            model: PhotoProduct,
                            as: 'photo',
                            attributes: ['photo_product'],
                        }
                    ]
                },
                { model: Order_list, as: 'order_list', attributes: ['code_order']}
            ]
        });

		if (reviews) {
			res.status(200).json({
				message: "Get All Review Successfully",
				data: reviews,
			});
		} else {
			res.status(404).json({
				message: "Review not found",
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
};

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review_products.findByPk(id, {
            include: [
                { model: Users_customer, as: 'user_customer', attributes: ['fullname']},
                { 
                    model: Product, 
                    as: 'products', 
                    attributes: ['name_product'],
                    include : [
                        {
                            model: PhotoProduct,
                            as: 'photo',
                            attributes: ['photo_product'],
                        }
                    ]
                },
                { model: Order_list, as: 'order_list', attributes: ['code_order']}
            ]
        });

		if (review) {
			res.status(200).json({
				message: `Get Review by ID: ${id} Successfully`,
				data: review,
			});
		} else {
			res.status(404).json({ message: `Get Review by ID ${id} Failed` });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getReviewByRating = async (req, res) => {
    try {
        const { rating } = req.params;
        const reviews = await Review_products.findAll({
            where: {
                number_review: rating,
            },
            include: [
                { model: Users_customer, as: 'user_customer', attributes: ['fullname']},
                { 
                    model: Product, 
                    as: 'products', 
                    attributes: ['name_product'],
                    include : [
                        {
                            model: PhotoProduct,
                            as: 'photo',
                            attributes: ['photo_product'],
                        }
                    ]
                },
                { model: Order_list, as: 'order_list', attributes: ['code_order']}
            ]
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
};

const getReviewByUserId = async (req, res) => {
    try {
        const { userId } = req.user;
        console.log(userId);
        const review = await Review_products.findOne({
            where: {
                id_users_customer: userId,
            },
            include: [
                { model: Users_customer, as: 'user_customer', attributes: ['fullname']},
                { 
                    model: Product, 
                    as: 'products', 
                    attributes: ['name_product'],
                    include : [
                        {
                            model: PhotoProduct,
                            as: 'photo',
                            attributes: ['photo_product'],
                        }
                    ]
                },
                { model: Order_list, as: 'order_list', attributes: ['code_order']}
            ]
        });

        if (!review) {
            return res.status(404).json({
                message: "There is no Product Selected",
            });
        }
        res.status(200).json(review);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error"});
    }
};

const createReview = async (req, res) => {
    try {
        const { id_products, id_users_customer, message_review, number_review, id_order_list } = req.body;
        console.info("Request Body:", req.body);
        // Query the Order_list model
        const order = await Order_list.findOne({
            where: { id: id_order_list }
        });

        
        console.info("ID Order List:", id_order_list);
        console.info("Order Status:", order ? order.status_order : "Order not found");

		// Check if the order is completed
		if (!order || order.status_order !== "Completed") {
			return res.status(400).json({
				message: `Order not completed or not found`,
			});
		}

		// Check if a review already exists for the same product by the same customer
		const existingReview = await Review_products.findOne({
			where: {
                id_order_list,
				id_products,
				id_users_customer,
			},
		});

		if (existingReview) {
			return res.status(400).json({ message: "Review for this product already exists" });
		}

		// Create a new review
		const reviewProducts = await Review_products.create({
			id_users_customer,
			id_products,
			id_order_list,
			message_review,
			number_review,
		});

		if (reviewProducts) {
			res.status(201).json({
				message: "Create Review Products Successfully",
				data: reviewProducts,
			});
		} else {
			res.status(400).json({
				message: "Create Review Products Failed",
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error " });
	}
};

const updateReview = async (req, res) => {
	try {
		const { id } = req.params;
		const { message_review, number_review } = req.body;

		// Check if the review exists
		const review = await Review_products.findByPk(id);

		if (!review) {
			return res.status(404).json({ message: "Review not found" });
		}

		// Log the existing values before the update
		console.log("Existing Review:", review.get({ plain: true }));

		// Update review attributes if provided in the request body
		if (message_review !== undefined) {
			review.message_review = message_review;
		}

		if (number_review !== undefined) {
			review.number_review = number_review;
		}

		console.info("Message Review: ", message_review);
		console.info("Number Review: ", number_review);

		// Save the updated review
		await review.save();

		// Log the updated values
		console.log("Updated Review:", review.get({ plain: true }));

		res.status(200).json({
			message: "Update Review Successfully",
			data: review,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const deleteReview = async (req, res) => {
	try {
		const { id } = req.params;
		const review = await Review_products.findByPk(id);

		if (!review) {
			return res.status(404).json({ message: "Review not found" });
		}

		await review.destroy();

		res.status(200).json({
			message: `Deleted Review By ID: ${id} Successfully `,
			data: review,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
    getReview,
    getReviewById,
    getReviewByRating,
    getReviewByUserId,
    createReview,
    updateReview,
    deleteReview
};
