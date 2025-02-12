import { MongoClient, ServerApiVersion, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// You'll need to setup a server on https://www.mongodb.com
// Check the connection script there and get your user name and password for 
// your db collection. Put these in .env
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

if (!mongoUser || !mongoPassword) {
  throw new Error("Missing MongoDB credentials in environment variables.");
}

const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.q7yehdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

let client: MongoClient | null = null;
let db: Db;

/**
 * Establish MongoDB connection (singleton pattern)
 */
export async function connectToDB() {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    db = client.db("test");
    console.log("Connected to MongoDB");
  }
  return db;
}

/**
 * Graceful shutdown for MongoDB connection
 */
export async function closeDBConnection() {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}
