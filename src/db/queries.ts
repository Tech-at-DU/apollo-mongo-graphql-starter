import { connectToDB } from "./connection.js";

/**
 * Fetch spaces from MongoDB
 * You can define more functions here to fetch things from your collection.
 */
export async function getSpaces() {
  try {
    const db = await connectToDB();
    return await db.collection("datas").find().toArray();
  } catch (error) {
    console.error("Error fetching spaces:", error);
    return [];
  }
}
