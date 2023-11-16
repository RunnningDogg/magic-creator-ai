import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * 详情页
 * @param request
 * @returns
 */
export const POST = async (request: NextRequest) => {
  const requestJson = await request.json();

  const postId = requestJson["post_id"];
  console.log(requestJson);
  console.log(postId);
  const data = await prisma.gpts.findFirst({
    where: {
      post_id: postId,
    },
  });
  // console.log("结果 ", data);

  return NextResponse.json({ item: data });
};
