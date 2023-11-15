import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  // 获取查询参数, 默认是0

  // 获取总共的gpts
  const count = await prisma.gpts.count();

  console.log("count接口 ", count);
  return NextResponse.json({ count });
};
