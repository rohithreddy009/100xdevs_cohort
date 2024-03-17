import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
  return NextResponse.json({ username: "pinky", email: "pinky@gmail.com" });
}

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return new NextResponse(JSON.stringify({ msg: "Invalid JSON input" }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    return new NextResponse(JSON.stringify({ body }), {
      status: 200, // OK
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error while signing up:", error);
    return new NextResponse(JSON.stringify({ msg: "Error while signing up" }), {
      status: 500, 
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
