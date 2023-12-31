require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USERNAME, 
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME || "streetflow",
		host: process.env.DB_HOST || "localhost",
		port: 5432,
		dialect: "postgres",
		logging: false,
	},
};
