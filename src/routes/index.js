const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const orderListRoutes = require("./order_list.routes");
const productsListRoutes = require("./products.routes");
const reviewProductsRoutes = require('./review_products.routes');

route.use("/", testingRoutes);
route.use("/testing", testingRoutes);
route.use("/order", orderListRoutes);
route.use("/products", productsListRoutes);
route.use("/review_products", reviewProductsRoutes);

module.exports = route;
