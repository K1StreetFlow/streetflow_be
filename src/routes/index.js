const route = require("express").Router();
const testingRoutes = require("./testing.routes");
const orderListRoutes = require("./order_list.routes");
const reviewProductsRoutes = require("./review_products.routes");
const paymentRoutes = require("./payment.routes");
const productsRoutes = require("./products.routes");
const categoryProductsRoutes = require("./categoryProduct.routes");
const photoProductRoutes = require("./photoProduct.routes");

route.use("/", testingRoutes);
route.use("/testing", testingRoutes);
route.use("/order", orderListRoutes);
route.use("/review_products", reviewProductsRoutes);
route.use("/payments", paymentRoutes);
route.use("/products", productsRoutes);
route.use("/category_products", categoryProductsRoutes);
route.use("/photo_products", photoProductRoutes);
module.exports = route;
