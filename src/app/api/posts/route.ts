import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  // 获取查询参数, 默认是0
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");

  // 获取总共的gpts
  const count = await prisma.gpts.count();
  // console.log(allPosts);
  // 默认返回前500个

  // 起始
  const limit1 = page ? Number(page) : 0;
  const pageData = await prisma.gpts.findMany({
    skip: limit1,
    take: 300,
  });
  return NextResponse.json({ count, pageData });
};

export const POST = async (request: NextRequest) => {
  //  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

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
