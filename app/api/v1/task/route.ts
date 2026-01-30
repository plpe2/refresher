import getConnection from "@/lib/db_connection";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();
  const conn = await getConnection();
  const [getTask] = await conn.query<RowDataPacket[]>(
    "SELECT * FROM tasktbl WHERE userId = ?",
    id,
  );

  if (getTask.length == 0) {
    return NextResponse.json({ status: false });
  }

  return NextResponse.json({ status: true, taskList: getTask });
}
