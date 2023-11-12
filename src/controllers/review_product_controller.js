const { Review_products, Order_list } = require('../models');

const getReviewProducts = async (req, res) => {
    try {
        const reviewProducts = await Review_products.findAll();

        if (reviewProducts) {
            res.status(200).json({
                message: 'Get All Review Products Successfully',
                data: reviewProducts,
            });
        } else {
            res.status(404).json({
                message: "Get All Review Products Failed"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const getReviewProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const reviewProductById = await Review_products.findByPk(id);
        if (reviewProductById) {
            res.status(200).json({
                message: `Get Review Product By ID: ${id} Successfully`,
                data: reviewProductById
            });
        } else {
            res.status(404).json({
                message: `Get Review By ID: ${id} Failed`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const createReview = async (req, res) => {
    try {
        const { id_order_list, id_products, id_users_customer, review } = req.body;
        const order = await Order_list.findByPk(id_order_list);

        if(!order || order.status_order !== 'Finished') {
            return res.status(400).json({
                message: "Order not finished or not found"
            });
        }

        const reviewProduct = await Review_products.create({
            id_products,
            id_users_customer,
            id_order_list,
            review,
            rating,
            date_review: 
        })
    } catch (error) {

    }
}

module.exports = {
    getReviewProducts,
    getReviewProductById
};