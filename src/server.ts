import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { connectToDB } from "./db";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  await connectToDB();

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

startServer();
