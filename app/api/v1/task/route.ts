import getConnection from "@/lib/db_connection";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

// api being called on fetchingTask function
export async function POST(req: Request) {
  const { userId } = await req.json();
  const conn = await getConnection();
  const [getTask] = await conn.query<RowDataPacket[]>(
    "SELECT * FROM tasktbl WHERE userId = ?",
    userId,
  );

  if (getTask.length == 0) {
    return NextResponse.json({ status: false });
  }

  return NextResponse.json({ status: true, taskList: getTask });
}
