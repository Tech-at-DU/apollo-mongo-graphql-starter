import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { MongoClient, ServerApiVersion } from 'mongodb';

import dotenv from 'dotenv';
dotenv.config()

// Define your mongo user and passwords in .env
const mongoUser = process.env.MONGO_USER
const mongoPassword = process.env.MONGO_PASSWORD

// Configure your connection uri on https://www.mongodb.com
const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.q7yehdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// I used this function to query my db on mongodb.com. 
async function getSpaces() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection, for debugging. 
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db('test').collection('datas')
    const cursor = db.find()
    const spaces = []
    for await (const space of cursor) {
      // console.log(space)
      spaces.push(space)
    }
    return spaces
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// getSpaces().catch(console.dir);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `
  type Geo {
    lat: Float
    lon: Float
  }

  type Space {
    title: String
    desc: String
    address: String
    hours: String
    geo: Geo
    images: [String]
    features: [String]
    id: Int
  }

  type Query {
    spaces: [Space!]!
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    spaces: () => getSpaces(),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);