require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: "root",
    password: "saputra123",
    database: "database_test",
    host: "127.0.0.1",
    port : "3306",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "saputra123",
    database: "database_production",
    host: "127.0.0.1",
    port : "3306",
    dialect: "mysql",
  },
};
