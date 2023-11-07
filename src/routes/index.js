const route = require("express").Router();
const testingRoutes = require("./testing.routes");

route.use("/testing", testingRoutes);

module.exports = route;
