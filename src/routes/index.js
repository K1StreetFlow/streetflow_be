const route = require("express").Router();

const authAdminRoutes = require("./authAdminRoutes");
const adminRoutes = require("./adminRoutes");
const authUserRoutes = require("./authUserRoutes");
const userRoutes = require("./userRoutes");
const addressRoutes = require("./address.routes");
const productsRoutes = require("./products.routes");
const categoryProductsRoutes = require("./categoryProduct.routes");
const photoProductRoutes = require("./photoProduct.routes");
const paymentRoutes = require("./payment.routes");
const cartRoutes = require("./cart.routes");
const cartDetailRoutes = require("./cart-detail.routes");
const orderListRoutes = require("./order_list.routes");
const nomorResiRoutes = require("./nomor_resi.routes");
const shippingRoutes = require("./shipping.routes");

// Authentication routes come first
route.use("/admin/auth", authAdminRoutes);
route.use("/user/auth", authUserRoutes);

// Then, other routes
route.use("/admin", adminRoutes);
route.use("/user", userRoutes);

route.use("/addresses", addressRoutes);

route.use("/products", productsRoutes);
route.use("/category_products", categoryProductsRoutes);
route.use("/photo_products", photoProductRoutes);

route.use("/payments", paymentRoutes);
route.use("/carts", cartRoutes);
route.use("/cart-details", cartDetailRoutes);

module.exports = route;
