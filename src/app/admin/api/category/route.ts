import prisma from "@/app/lib/prisma-client";
import { categorySchema, TCategorySchema } from "@/app/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: TCategorySchema = await req.json();
  const result = categorySchema.safeParse(body);
  console.log(result);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      })
    );
  }

  const category = await prisma.category.create({
    data: result.data,
  });

  return new Response(JSON.stringify(category), { status: 200 });
}

export async function GET(req: NextRequest) {
  const categories = await prisma.category.findMany();
  console.log(JSON.stringify(categories));
  return new Response(JSON.stringify(categories), { status: 200 });
}
