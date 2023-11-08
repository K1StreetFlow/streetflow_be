const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const orderListRoutes = require("./order_list.routes");
const productsListRoutes = require("./products.routes");
const reviewProductsRoutes = require("./review_products.routes");
const paymentRoutes = require("./payment.routes");
const cartRoutes = require("./cart.routes");
const cartDetailRoutes = require("./cart-detail.routes");

route.use("/", testingRoutes);
route.use("/testing", testingRoutes);
route.use("/order", orderListRoutes);
route.use("/products", productsListRoutes);
route.use("/review_products", reviewProductsRoutes);
route.use("/payments", paymentRoutes);
route.use("/carts", cartRoutes);
route.use("/cart-details", cartDetailRoutes);

module.exports = route;
