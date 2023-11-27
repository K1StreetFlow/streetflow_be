const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./src/routes");
const path = require("path");
require("dotenv").config();
const morgan = require("morgan");

app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:3000", // Replace with the URL of your Next.js app
		credentials: true, // Enable credentials (cookies, authorization headers, etc.)
	})
);
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "src/assets/images/profile")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
