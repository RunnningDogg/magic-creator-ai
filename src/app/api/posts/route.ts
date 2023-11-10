import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  // const allPosts = await prisma.posts.findMany();
  // console.log(allPosts);

  return NextResponse.json({ hi: "ho" });
};

export const POST = async (request: NextRequest) => {
  const requestJson = await request.json();
  console.log("post " + requestJson);
  console.log(requestJson);
  await prisma.posts.create({
    data: requestJson,
  });

  return new Response("success", {
    status: 200,
  });
};
