import getConnection from "@/lib/db_connection";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();
  const conn = await getConnection();
  const [getTask] = await conn.query(
    "SELECT * FROM task WHERE ownerId = ?",
    id
  );

  return NextResponse.json({ taskList: getTask });
}
