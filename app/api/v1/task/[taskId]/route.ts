import getConnection from "@/lib/db_connection";
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
  const { request, status, newTaskTitle, newTaskBody } = await req.json();
  const taskId = (await params).taskId;
  const conn = await getConnection();

  if (request == "UpdatingStatus") {
    // Handles Updating `status` of the Task
    const updateStatus = await conn.query(
      "UPDATE `tasktbl` SET `status` = ? WHERE `taskId` = ?",
      [status, taskId],
    );

    if (!updateStatus) {
      return NextResponse.json({
        status: false,
        message: "Failed Updating Task",
      });
    }

    return NextResponse.json({
      status: true,
      message: `Successfully updated status into ${status}`,
    });
  } else if (request == "UpdatingTask") {
    // Handles Updating `overall details` of the Task
    const updateTask = await conn.query(
      "UPDATE `tasktbl` SET `taskTitle`=?, `taskDesc`=? WHERE `taskId`=?",
      [newTaskTitle, newTaskBody, taskId],
    );

    if (!updateTask) {
      return NextResponse.json({
        status: false,
        message: "Failed Updating Task",
      });
    }

    return NextResponse.json({
      status: true,
      redirect: "http://localhost:3000/task",
    });
  } else {
    return NextResponse.json({
      status: false,
      message: "Failed Updating Task",
    });
  }
}
