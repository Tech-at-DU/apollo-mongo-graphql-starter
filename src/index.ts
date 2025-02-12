import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// I had to incude .js on all imports. Seems like this is required for esmodules in node. 
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import { closeDBConnection } from "./db/connection.js";

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start Apollo Server with CORS
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    // Seems that Apollo Server doesn't support cors. It worked without. 
    // cors: {
    //   origin: ["http://localhost:3000"], // Adjust for frontend
    //   credentials: true,
    // },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

// Handle shutdown for MongoDB
process.on("SIGINT", async () => {
  await closeDBConnection();
  process.exit(0);
});

startServer();
