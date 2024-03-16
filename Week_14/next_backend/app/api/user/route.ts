import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient() 

export async function GET() {
    return Response.json({ username: "pinky", email: "pinky@gmail.com" })
  }

export async function POST(req: NextRequest) {
  const body = await req.json()
  try {
    await client.user.create({
      data: {
        username: body.username,
        password: body.password
      }
    })
    return NextResponse.json({
      body
    })
  }catch(e){
    NextResponse.json({
      msg: "Error while signing in"
    })
  }

}

