const fs = require("fs");

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "ecoomerce",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    dialect: "postgres",
  },
};
