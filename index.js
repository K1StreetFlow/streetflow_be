const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./src/routes");
require("dotenv").config();

app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:3000",
		allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
		methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
		optionsSuccessStatus: 200,
	})
);
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
