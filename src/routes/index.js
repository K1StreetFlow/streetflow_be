const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const orderListRoutes = require("./order_list.routes");
const productsListRoutes = require("./products.routes");


route.use("/", testingRoutes);
route.use("/order", orderListRoutes);
route.use("/products", productsListRoutes);


module.exports = route;
