import getConnection from "@/lib/db_connection";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const taskId = (await params).taskId;

  return NextResponse.json({ givenId: taskId });
}

// api that being on handleCreateTask function
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

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const { newTaskTitle, newTaskBody } = await req.json();
  const taskId = (await params).taskId;
  const conn = await getConnection();
  const updateTask = await conn.query(
    "UPDATE `tasktbl` SET `taskTitle`=?, `taskDesc`=? WHERE `taskId`=?",
    [newTaskTitle, newTaskBody, taskId],
  );

  if (!updateTask) {
    return NextResponse.json({ status: false });
  }

  return NextResponse.json({
    status: true,
    redirect: "http://localhost:3000/task",
  });
}
