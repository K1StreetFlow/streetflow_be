const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const paymentRoutes = require("./payment.routes");

route.use("/testing", testingRoutes);
route.use("/payments", paymentRoutes);

module.exports = route;
