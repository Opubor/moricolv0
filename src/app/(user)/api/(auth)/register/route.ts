import prisma from "@/app/lib/prisma-client";
import { registerUserSchema, TRegisterUserSchema } from "@/app/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: TRegisterUserSchema = await req.json();
  const result = registerUserSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      })
    );
  }

  const usedEmail = await prisma.user.findFirst({
    where: { email: result.data.email },
  });
  //   if(result.data.email)
  const user = await prisma.user.create({
    data: result.data,
  });
  return new Response(JSON.stringify(user), { status: 200 });
}
