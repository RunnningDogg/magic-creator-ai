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

  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");

  const limit1 = page ? Number(page) : 0;
  const skip = limit1 * 100;
  console.log("limit ", limit1);
  console.log("skip ", skip);
  let data;
  let count = 0;
  if (type === "author") {
    data = await prisma.gpts.findMany({
      where: {
        author: {
          contains: query,
          mode: "insensitive",
        },
      },
      skip: skip,
      take: 100,
    });
    count = await prisma.gpts.count({
      where: {
        author: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
    // console.log("结果 ", data);
  } else if (type === "title") {
    data = await prisma.gpts.findMany({
      where: {
        show_name: {
          contains: query,
          mode: "insensitive",
        },
      },
      skip: skip,
      take: 100,
    });
    count = await prisma.gpts.count({
      where: {
        show_name: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
    // console.log("title 结果 ", data);
  }
  // console.log("searchData count", data);
  console.log("searchCount ", count);
  return NextResponse.json({ item: data, searchCount: count });
};
