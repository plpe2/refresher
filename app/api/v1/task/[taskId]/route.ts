import getConnection from "@/lib/db_connection";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const taskId = (await params).taskId;

  return NextResponse.json({ givenId: taskId });
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const { title, body } = await req.json();
  const taskId = (await params).taskId;
  const conn = await getConnection();
  const insertTask = await conn.query(
    "INSERT INTO tasktbl (`taskTitle`, `taskDesc`, `userId`) VALUES (?,?,?)",
    [title, body, taskId],
  );

  if (!insertTask) {
    return NextResponse.json({ status: false });
  }

  return NextResponse.json({
    status: true,
    taskContent: { title: title, body: body, requestor: taskId },
  });
}
