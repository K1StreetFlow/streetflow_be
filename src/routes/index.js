const route = require("express").Router();

const authAdminRoutes = require("./auth/authAdmin");
const authUserRoutes = require("./auth/authUser");
const adminRoutes = require("./admin/admin");
const userRoutes = require("./users/user");
const addressRoutes = require("./users/address");

const productsRoutes = require("./products/products");
const categoryProductsRoutes = require("./products/categoryProduct");
const photoProductRoutes = require("./products/photoProduct");

const cartRoutes = require("./cart/cart");
const cartDetailRoutes = require("./cart/cartDetail");
const checkoutProductRoutes = require("./checkout/checkoutProduct");
const paymentRoutes = require("./payment/payment");

const orderListRoutes = require("./order/orderList");
const shippingRoutes = require("./order/shipping");

const reviewProductsRoutes = require("./products/reviewProducts");
const photoReviewProductRoutes = require("./products/photoReviewProducts");

// Authentication routes come first
route.use("/api/admin/auth", authAdminRoutes);
route.use("/api/user/auth", authUserRoutes);

// Then, other routes
route.use("/api/admin", adminRoutes);
route.use("/api/user", userRoutes);

route.use("/api/addresses", addressRoutes);

route.use("/api/products", productsRoutes);
route.use("/api/category_products", categoryProductsRoutes);
route.use("/api/photo_products", photoProductRoutes);

route.use("/api/payments", paymentRoutes);
route.use("/api/carts", cartRoutes);
route.use("/api/cart-details", cartDetailRoutes);
route.use("/api/checkout-product", checkoutProductRoutes);

route.use("/api/order", orderListRoutes);
route.use("/api/address", addressRoutes);
route.use("/api/shippings", shippingRoutes);
route.use("/api/review-products", reviewProductsRoutes);
route.use("/api/review-products-photo", photoReviewProductRoutes);

module.exports = route;
