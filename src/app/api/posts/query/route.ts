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

  const query = requestJson["query"];
  const type = requestJson["type"];

  let data;
  if (type === "author") {
    data = await prisma.gpts.findMany({
      where: {
        author: {
          contains: query,
        },
      },
    });
    console.log("结果 ", data);
  } else if (type === "") {
    data = await prisma.gpts.findMany({
      where: {
        show_desc: {
          contains: query,
        },
      },
    });
    console.log("结果 ", data);
  }
  return NextResponse.json({ item: data });
};
