const fs = require("fs");

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "recodink",
    password: process.env.DB_PASSWORD || "recodink16",
    database: process.env.DB_NAME || "streetflow",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    dialect: "postgres",
  },
};
