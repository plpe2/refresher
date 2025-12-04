import getConnection from "@/lib/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  const conn = await getConnection();
  const [data] = await conn.query("SELECT * FROM users");

  return NextResponse.json(data);
}
