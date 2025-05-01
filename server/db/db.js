const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || "Kevngn0606!",
  port: process.env.DB_PORT || 5432,
});

// Test the connection to the database
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
  connect: () => pool.connect(),
  end: () => pool.end(),
  release: () => pool.release(),
};
