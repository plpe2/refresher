import getConnection from "@/lib/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  const conn = await getConnection();
  const [data] = await conn.query("SELECT * FROM users");

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { name, age, password } = await req.json();
  const conn = await getConnection();
  const [registerRequest] = await conn.query(
    "INSERT INTO users (`name`, `age`, `password`) VALUES (?, ?, ?)",
    [name, age, password]
  );

  if (registerRequest)
    return NextResponse.json({ message: "Successfully Registered" });
}
