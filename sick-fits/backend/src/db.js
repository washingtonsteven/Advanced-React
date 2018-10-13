// db.js - connects to remote Prisma DB

// using `require` because Node is in flux on `import` right now
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: process.env.NODE_ENV !== "production"
});

module.exports = db;
