import mysql2 from "mysql2/promise.js";

export default async function getConnection() {
  return await mysql2.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_PASSWORD,
    port: 3307,
    database: process.env.DB_database,
  });
}
