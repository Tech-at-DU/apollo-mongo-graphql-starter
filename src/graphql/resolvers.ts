import { getSpaces } from "../db/queries.js";

export const resolvers = {
  Query: {
    spaces: async () => {
      try {
        return await getSpaces();
      } catch (error) {
        console.error("GraphQL Resolver Error:", error);
        throw new Error("Failed to fetch spaces.");
      }
    },
  },
};
