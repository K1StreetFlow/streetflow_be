const route = require("express").Router();

const authAdminRoutes = require("./authAdminRoutes");
const adminRoutes = require("./adminRoutes");
//const authUserRoutes = require("./authUserRoutes");
const userRoutes = require("./userRoutes");

// Authentication routes come first
route.use("/admin/auth", authAdminRoutes);
//route.use("/user/auth", authUserRoutes);

// Then, other routes
route.use("/admin", adminRoutes);
route.use("/user", userRoutes);

module.exports = route;
