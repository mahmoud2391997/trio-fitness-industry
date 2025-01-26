import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../mongodb";
const { ObjectId } = require("mongodb");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
console.log(id);

  if (!id || Array.isArray(id)) {
    res.status(400).json({ error: "Invalid package ID" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("triofitnessindustry"); // Replace with your database name

    // Fetch packages collection
    const packageToBePurshased = await db
      .collection("packages")
      .findOne({ _id: new ObjectId(id) }); // Replace 'packages' with your collection name
    console.log(packageToBePurshased);

    res.status(200).json(packageToBePurshased);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
