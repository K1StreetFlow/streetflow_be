const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const orderListRoutes = require("./order_list.routes");
const addressRoutes = require("./address.routes");
const shippingRoutes = require("./shipping.routes");


route.use("/", testingRoutes);
route.use("/testing", testingRoutes);
route.use("/order", orderListRoutes);
route.use("/address", addressRoutes);
route.use("/shipping", shippingRoutes);


module.exports = route;
