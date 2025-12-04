import mysql2 from "mysql2/promise.js";

export default async function getConnection() {
  return await mysql2.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: "",
    port: 3306,
    database: process.env.DB_database,
  });
}
