import { createRedisInstance } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = createRedisInstance();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTopPosts() {
  return await redis.zrevrange("postViews", 0, 150, "WITHSCORES");
}

export async function GET(request: NextRequest) {
  //  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // 数据格式 post_id, score
  const topPosts = await getTopPosts();
  let postIds: string[] = [];
  let postScoreMap: { [key: string]: number } = {};
  for (let i = 0; i < topPosts.length; i = i + 2) {
    const postId = topPosts[i];
    const postScore = Number(topPosts[i + 1]);
    postIds.push(postId);
    postScoreMap[postId] = postScore;
  }

  // console.log("postIds ", postIds);

  // 请求
  const hotPostsArray = await prisma.gpts.findMany({
    where: {
      post_id: {
        in: postIds,
      },
    },
  });

  // console.log("gptsData ", hotPostsArray);
  const gptData = postIds.map((item) => {
    // const score = postScoreMap[item.post_id];
    const info = hotPostsArray.find((hotPost) => hotPost.post_id === item);
    return { score: postScoreMap[item], ...info };
  });

  // console.log("gptData ", gptData);
  return Response.json({ gptData });
}

export async function POST(request: NextRequest) {
  //  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const requestJson = await request.json();
  const post_id = requestJson["post_id"];
  // 逻辑补充, 因为和之前的路由不一样,所以需要判断是否是新的路由
  const existsCount = await prisma.gpts.count({
    where: {
      post_id: post_id,
    },
  });
  if (existsCount > 0) {
    // 增加帖子的点赞计数
    await redis.zincrby("postViews", 1, post_id);
    // 对每个 post_id 使用一个独立的键，并设置过期时间

    // const postViewKey = `postView:${post_id}`;
    // const isSet = await redis.setnx(postViewKey, "exists");
    // if (isSet) {
    //   await redis.expire(postViewKey, 86400); // 24小时
    // }
    return Response.json({ status: "0" });
  }
  console.log(` 点了一些不存在的路由 路由 ${post_id} count: ${existsCount}`);
  return Response.json({ status: "1" });
}
