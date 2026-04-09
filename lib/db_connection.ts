import mysql2 from "mysql2/promise.js";
import { MongoClient, ServerApiVersion } from "mongodb";

const client = Promise<MongoClient>;

export default async function getConnection() {
  return await mysql2.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_PASSWORD,
    port: 3307,
    database: process.env.DB_database,
  });
}

export async function MongoConnection() {
  const client = new MongoClient(process.env.MONGODB_URI as string, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  return client.db("todo_app");
}
