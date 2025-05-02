const { db } = require("./db");

module.exports = {
  // SELECT
  getAllUsers: async () => {
    try {
      const result = await db.query(`SELECT * FROM users`);
      return result.rows;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  },

  // INSERT
  createUser: async (email, password) => {
    try {
      const result = await db.query(
        `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, password`,
        [email, password],
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  // UPDATE
  updateUser: async (id, email, password) => {
    try {
      const result = await db.query(
        `UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING id, email, password`,
        [email, password, id],
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },

  // DELETE
};
