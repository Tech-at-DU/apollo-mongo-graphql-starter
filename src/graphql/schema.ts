export const typeDefs = `
  type Geo {
    lat: Float
    lon: Float
  }

  type Space {
    _id: ID!
    title: String
    desc: String
    address: String
    hours: String
    geo: Geo
    images: [String]
    features: [String]
  }

  type Query {
    spaces: [Space!]!
  }
`;
