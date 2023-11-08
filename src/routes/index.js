const route = require("express").Router();
const testingRoutes = require("./testing.routes");
<<<<<<< HEAD
const orderListRoutes = require("./order_list.routes");
const productsListRoutes = require("./products.routes");


route.use("/", testingRoutes);
route.use("/order", orderListRoutes);
route.use("/products", productsListRoutes);


=======
const reviewProductsRoutes = require('./Review_products_routes');


route.use("/testing", testingRoutes);
route.use("/review_products", reviewProductsRoutes);
>>>>>>> raihan
module.exports = route;
