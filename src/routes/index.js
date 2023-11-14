const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const reviewProductsRoutes = require('./review_products.routes');


route.use("/testing", testingRoutes);
route.use("/review-products", reviewProductsRoutes);
module.exports = route;
