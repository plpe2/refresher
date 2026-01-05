import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const taskId = (await params).taskId;

  return NextResponse.json({ givenId: taskId });
}
