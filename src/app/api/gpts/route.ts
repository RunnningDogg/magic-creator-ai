import { createRedisInstance } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = createRedisInstance();

async function getTopPosts() {
  return await redis.zrevrange("postLikes", 0, 150, "WITHSCORES");
}

export async function GET(request: NextRequest) {
  //  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const topPosts = await getTopPosts();

  console.log(topPosts);
  return Response.json({ topPosts });
}
