const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const paymentRoutes = require("./payment.routes");
const cartRoutes = require("./cart.routes");
const cartDetailRoutes = require("./cart-detail.routes");

route.use("/testing", testingRoutes);
route.use("/payments", paymentRoutes);
route.use("/carts", cartRoutes);
route.use("/cart-details", cartDetailRoutes);

module.exports = route;
