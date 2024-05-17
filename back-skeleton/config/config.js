require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "cv-db",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres" // assuming you're using Postgres
  },
  test: {
    username: "root",
    password: "root",
    database: "cv-db",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: "root",
    database: "cv_db",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
