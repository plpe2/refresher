import getConnection from "@/lib/db_connection";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

// api being called on fetchingTask function
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const conn = await getConnection();

  const filter = searchParams.get("filter")?.toString();
  const searchValue = searchParams.get("searchValue")?.toString();

  var queryString = "SELECT * FROM tasktbl WHERE 1 = 1 ";
  const queryValues: any[] = [];

  // Checking for available filters on Fetching
  if (filter && searchValue) {
    queryString += ` AND ${filter} LIKE ?`;
    queryValues.push(`%${searchValue}%`);
  }

  // LIMIT 10 OFFSET 0

  const [getTask] = await conn.query<RowDataPacket[]>(queryString, queryValues);

  if (getTask.length == 0) {
    return NextResponse.json({ status: false, taskList: [] });
  }

  return NextResponse.json({ status: true, taskList: getTask });
}
