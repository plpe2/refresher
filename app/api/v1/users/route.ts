import getConnection from "@/lib/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  const conn = await getConnection();
  const [data] = await conn.query("SELECT * FROM users");

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { nameValue, ageValue, passwordValue } = await req.json();
  const conn = await getConnection();
  const [registerRequest] = await conn.query(
    "INSERT INTO users (`name`, `age`, `password`) VALUES (?, ?, ?)",
    [nameValue, ageValue, passwordValue]
  );

  if (registerRequest)
    return NextResponse.json({ message: "Successfully Registered" });
}
