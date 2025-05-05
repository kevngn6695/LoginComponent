const { db } = require("./db");

module.exports = {
  // SELECT
  getUserById: async (id) => {
    try {
      const result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  },

  getUserByEmail: async (email) => {
    try {
      const result = await db.query(`SELECT * FROM users WHERE email = $1`, [
        email,
      ]);
      return result.rows[0];
    } catch (error) {
      console.error("Error fetching user by email:", error);
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

  setResetToken: async (id, resetToken) => {
    try {
      const result = await db.query(
        `UPDATE users 
        SET reset_token = $1, reset_token_expiry = NOW() + INTERVAL '1 hour' 
        WHERE id = $2 RETURNING id, email, password`,
        [resetToken, id],
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error setting reset token:", error);
      throw error;
    }
  },

  resetPassword: async (id, password) => {
    try {
      const result = await db.query(
        `UPDATE users SET password = $1, reset_token = NULL, reset_token_expiry = NULL WHERE id = $2 RETURNING id, email, password`,
        [password, id],
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  },
  // DELETE
};
