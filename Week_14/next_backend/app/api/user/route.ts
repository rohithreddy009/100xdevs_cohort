import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient() 

export async function GET() {
    return Response.json({ username: "pinky", email: "pinky@gmail.com" })
  }

export async function POST(req: NextRequest) {
  const body = await req.json()
  await client.user.create({
    data: {
      username: body.username,
      password: body.password
    }
  })
  console.log(body)
  
  return Response.json("hi you hit the correct route")
}