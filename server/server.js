/* Call all needed library */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db/db");
const operation = require("./db/operations");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { ApolloServer } = require("@apollo/server");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { applyMiddleware } = require("@apollo/server/express4");

/* Set port number to connect server with client */
const port = process.env.PORT || 5500;

/* Initialize express js */
const app = express();

const typeDefs = `#graphql
    type User {
        id: ID!
        username: String!
        password: String!
    }
    
    type AuthPayload {
        token: String!
        user: User!
    }

    type Query {
        users: [User!]!
    }

    type Mutation {
        login(username: String!, password: String!): String,
        register(username: String!, password: String!): AuthPayload!
    }
`;

/* Usage the library */
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const resolvers = {
  Query: {
    users: async () => {
      const users = await operation.getAllUsers();
      return users;
    },
  },
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await operation.getUserByUsername(username);
      if (!user) {
        throw new Error("User not found!");
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
      return token;
    },
    register: async (_, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await operation.createUser(username, hashedPassword);
      const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
      return { token, user };
    },
    forgotPassword: async (_, { email }) => {
      const user = await operation.getUserByEmail(email);
      if (!user) {
        throw new Error("User not found!");
      }
      const resetToken = jwt.sign({ id: user.id });

      await operation.setResetToken(user.id, resetToken);
    },
  },
};

/* Set a path between client and server */
app.use(express.static(path.join(__dirname, "client/build")));

app.get(/^\/(?!api).*/, (req, res) => {
  // Match all except /api routes
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

/* Listen to initial port */
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
