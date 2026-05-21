import { jwtVerify } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    const decoded = await jwtVerify(token);

    return NextResponse.json({ decoded: decoded });
  } catch (err) {
    if (err instanceof Error && err.name == "TokenExpiredError") {
      return NextResponse.json({
        message: "Expired token, try logging in again.",
        status: 401,
      });
    }
  }
}
