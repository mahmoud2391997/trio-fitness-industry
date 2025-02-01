import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Establish the MongoDB connection
    const client = await clientPromise;
    const db = client.db("triofitnessindustry"); // Replace with your database name

    // Fetch packages collection
    const transformations = await db.collection("reviews").find({}).toArray(); // Replace 'packages' with your collection name
console.log(transformations);

    res.status(200).json(transformations);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
