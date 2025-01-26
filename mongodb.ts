import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || ""; // MongoDB connection string

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Ensure the MongoClient is a singleton
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
