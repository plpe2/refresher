import getConnection from "@/lib/db_connection";
import { UserTypes } from "@/types/Users";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ usersId: string }> }
) {
  const usersId = (await params).usersId;
  const form = await req.formData();

  const name = await form.get("name");
  const age = await form.get("age");
  const password = await form.get("password");

  const conn = await getConnection();
  const updateUser = await conn.query(
    "UPDATE users SET name = ?, age = ?, password = ? WHERE id = ?",
    [name, age, password, usersId]
  );

  if (updateUser) return NextResponse.json({ message: "Sucessful" });
  return NextResponse.json({ message: "Not updated" });
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ usersId: string }> }
) {
  const usersId = (await params).usersId;
  const conn = await getConnection();
  const [data] = await conn.query<RowDataPacket[]>(
    "SELECT * FROM users WHERE id = ?",
    [usersId]
  );

  if (data.length <= 0)
    return NextResponse.json({ message: "No fetched account" });

  const userData = data[0] as UserTypes;

  return NextResponse.json(userData);
}
