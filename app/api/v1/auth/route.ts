import { jwtVerify } from "@/lib/auth";
import getConnection from "@/lib/db_connection";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const decoded = await jwtVerify(token);
  const conn = await getConnection();

  return NextResponse.json({ decoded: decoded });
}
