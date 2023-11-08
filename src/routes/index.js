const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const reviewProductsRoutes = require('./Review_products_routes');


route.use("/testing", testingRoutes);
route.use("/review_products", reviewProductsRoutes);
module.exports = route;
