const { db } = require("./db");

module.exports = {
  // SELECT

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
  // DELETE
};
