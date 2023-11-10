const { Review_products } = require('../models');

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


module.exports = {
    getReviewProducts,
    getReviewProductById
};