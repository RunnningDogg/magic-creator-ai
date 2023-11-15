import { createRedisInstance } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = createRedisInstance();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTopPosts() {
  return await redis.zrevrange("postLikes", 0, 150, "WITHSCORES");
}

export async function GET(request: NextRequest) {
  //  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // 数据格式 post_id, score
  const topPosts = await getTopPosts();
  const postIds = [];
  let postScoreMap: { [key: string]: number } = {};
  for (let i = 0; i < topPosts.length; i = i + 2) {
    const postId = topPosts[i];
    const postScore = Number(topPosts[i + 1]);
    postIds.push(postId);
    postScoreMap[postId] = postScore;
  }

  console.log("postIds ", postIds);

  // 请求
  const array = await prisma.gpts.findMany({
    where: {
      post_id: {
        in: postIds,
      },
    },
  });

  const gptData = postIds.map((item) => {
    const otherData = array.find((info) => info.post_id === item);
    return { score: postScoreMap[item], ...otherData };
  });

  console.log(gptData);

  return Response.json({ gptData });
}
