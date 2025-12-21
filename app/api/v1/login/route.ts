import { jwtSign } from "@/lib/auth";
import getConnection from "@/lib/db_connection";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const conn = await getConnection();
  const { name, password } = await req.json();
  const [LoginRequest] = await conn.query<RowDataPacket[]>(
    "SELECT id, name, password FROM users WHERE name = ?",
    [name]
  );

  if (LoginRequest.length <= 0 || !(password === LoginRequest[0].password))
    return NextResponse.json({ status: "failed" });

  const token = await jwtSign({ id: LoginRequest[0].id });

  return NextResponse.json({
    status: "success",
    redirect: "http://localhost:3000/userslist",
    token: token,
  });
}
