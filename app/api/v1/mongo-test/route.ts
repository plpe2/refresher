import {
  Get_mongoCalls,
  POST_mongoCalls,
} from "@/hooks/api/mongo-hooks/mongoCalls";
import { NextResponse } from "next/server";

export async function GET() {
  const getUsersData = await Get_mongoCalls({
    collectionName: "users",
    searchFilters: {},
  });

  if (getUsersData.length == 0) {
    return NextResponse.json({
      status: 200,
      message: "No users found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Success Fetching Users",
    data: getUsersData,
  });
}

export async function POST(req: Request) {
  const { name, age, city, province, balance, debt } = await req.json();
  const insertUser = await POST_mongoCalls({
    collectionName: "users",
    insertValues: {
      name: name,
      age: age,
      address: { city: city, province: province },
      balance: balance,
      debt: debt,
    },
  });

  if (!insertUser) {
    return NextResponse.json({
      status: 301,
      message: "Failed Inserting user in DB",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Successful POST request",
    data: {
      name: `Hi! ${name}`,
      age: `you're ${age} years old`,
      address: `You live in ${city}, ${province}`,
    },
  });
}
