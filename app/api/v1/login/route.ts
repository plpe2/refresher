import { jwtSign } from "@/lib/auth";
import getConnection from "@/lib/db_connection";
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

  if (!(password === LoginRequest[0].password))
    return NextResponse.json({ message: "Wrong password" });

  const token = await jwtSign({ user: LoginRequest[0] });

  return NextResponse.json({
    redirect: "http://localhost:3000/userslist",
    message: "Logged In Successfully",
    token: token,
  });
}
