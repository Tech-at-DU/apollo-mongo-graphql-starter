import { MongoClient, Db, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/graphqlDB";

let client: MongoClient
let db: Db


export async function connectToDB() {
  if (!client) {
    client = new MongoClient(MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })

    await client.connect()
    db = client.db('graphqlDB')
    console.log("✅ Connected to MongoDB");
  }
  return db
}

export { db }
