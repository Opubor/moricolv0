import prisma from "@/app/lib/prisma-client";
import { loginUserSchema, TLoginUserSchema } from "@/app/model/user";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body: TLoginUserSchema = await req.json();
  const result = loginUserSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        status: false,
        errors: result.error,
        message: "validation error",
      }),
      { status: 400 }
    );
  }

  const user = await prisma.user.findFirst({
    where: { email: result.data.email },
  });

  if (!user) {
    return new Response(
      JSON.stringify({
        status: false,
        message: "Invalid credentials",
      }),
      { status: 400 }
    );
  }

  if (user?.password !== result.data.password) {
    return new Response(
      JSON.stringify({
        status: false,
        message: "Invalid credentials",
      }),
      { status: 400 }
    );
  }

  return new Response(JSON.stringify(user), { status: 200 });
}
