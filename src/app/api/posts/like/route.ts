import { createRedisInstance } from "@/lib/redis";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/option";
import { NextRequest, NextResponse } from "next/server";

const redis = createRedisInstance();

async function likePost(title: string) {
  // 获取session数据
  const session = await getServerSession(options);
  const username = session?.user?.name;

  const dailyLimit = 30;
  const dailyKey = `likes:count:${username}:${
    new Date().toISOString().split("T")[0]
  }`;
  const likeKey = `like:${username}:${title}`;

  // 检查每日限额
  const currentCount = await redis.get(dailyKey);
  if (currentCount && parseInt(currentCount) >= dailyLimit) {
    return false; // 达到每日限额
  }

  // 尝试对帖子点赞
  const alreadyLiked = await redis.set(likeKey, "1", "EX", 86400, "NX");
  if (!alreadyLiked) {
    return false; // 已经点过赞
  }

  // 增加每日点赞计数
  await redis.incr(dailyKey);
  if (currentCount === null) {
    await redis.expire(dailyKey, 86400); // 设置过期时间为1天
  }

  // 增加帖子的点赞计数
  await redis.zincrby("postLikes", 1, title);

  return true; // 点赞成功
}

export const POST = async (request: NextRequest) => {
  //  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const requestJson = await request.json();
  const title = requestJson["title"];
  const success = await likePost(title);
  if (success) {
    // return new Response("success", {
    //   status: 200,
    // });
    return NextResponse.json({ status: 0, message: "Vote successful!" });
  } else {
    const res = {
      status: 1,
      message: "We already receive your vote, please vote for it tomorrow",
    };
    return NextResponse.json(res);
  }
};
