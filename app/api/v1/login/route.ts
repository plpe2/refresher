import getConnection from "@/lib/db_connection";
import { UserTypes } from "@/types/Users";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const conn = await getConnection();
  const { name, password } = await req.json();
  const [LoginRequest] = await conn.query<RowDataPacket[]>(
    "SELECT name, password FROM users WHERE name = ?",
    [name]
  );

  if (LoginRequest.length <= 0) {
    return NextResponse.json({ message: "No registered account found" });
  }

  const fetchedRecord = LoginRequest[0] as UserTypes;

  if (!(password === fetchedRecord.password))
    return NextResponse.json({ message: "Wrong password" });

  return NextResponse.json({ fetched: fetchedRecord });
}
