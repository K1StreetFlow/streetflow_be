const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const orderListRoutes = require("./order_list.routes");


route.use("/", testingRoutes);
route.use("/testing", testingRoutes);
route.use("/order", orderListRoutes);


module.exports = route;
