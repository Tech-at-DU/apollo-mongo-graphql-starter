import { gql } from "apollo-server";

export const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    initiative: Int
  }

  type Query {
    characters: [Character!]!
  }

  type Mutation {
    createCharacter(name: String!, initiative: Int): Character!
    updateCharacter(id: ID! name: String, initiative: Int): Character!
    deleteCharacter(id: ID!): Boolean
  }
`;
