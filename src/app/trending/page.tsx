// "use client";
import { createRedisInstance } from "@/lib/redis";
import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import cards from "../data.json";

import Link from "next/link";
import { ArrowUp, Vote } from "lucide-react";
import GiscusApp from "@/components/ui-tony/giscus";

type Card = {
  title?: string;
  content?: string;
  tag?: string;
  image?: string;
  href?: string;
  creator?: string;
  route?: string;
};

export default async function TrendingPage() {
  const redis = createRedisInstance();

  async function getTopPosts() {
    // return await redis.zrevrange("postLikes", 0, 150, "WITHSCORES");
    return await redis.zrevrange("postLikes", 0, 150, "WITHSCORES");
  }

  const redisData = await getTopPosts();

  // const [redisData, setRedisData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("/api/gpts");
  //     const resJson = await res.json();
  //     console.log("resjson" + resJson);
  //     setRedisData(resJson);
  //   }
  //   fetchData();
  // }, []);

  // 假设cards是您已经导入的JSON数组
  const matchedCards: (Card & { score?: string })[] = [];
  // const [matchedCards, setMatchCards] = useState<Card & { score?: string }[]>(
  //   [],
  // );

  for (let i = 0; i < redisData.length; i += 2) {
    const cardTitle = redisData[i];
    const cardScore = redisData[i + 1];
    const card = cards.find((c) => c.title === cardTitle);

    if (card) {
      matchedCards.push({
        ...card,
        score: cardScore, // 将分数添加到匹配的卡片对象中
      });
    }
  }

  console.log(matchedCards);

  return (
    <div className="min-h-screen">
      <h1 className=" mt-3 text-center text-3xl font-bold">Trending GPTs</h1>

      <Alert className=" mx-auto mt-6 max-w-xl">
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle className="text-center">Sort Algorithm💻</AlertTitle>
        <AlertDescription>
          <p className="font-bold">
            Every One has 30 Votes for 30 different pages every day. Same GPTs
            only 1 vote
          </p>
        </AlertDescription>
      </Alert>

      <h2 className="mt-8 text-center text-xl  font-bold">
        Most popular GPTs!
      </h2>
      <Table className="mx-auto mt-10 max-w-5xl">
        <TableCaption>GPTs voted by users by day</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Desc</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>URL</TableHead>
            <TableHead className="text-right">Vote</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matchedCards.map((item) => (
            <TableRow key={item?.title}>
              <TableCell className="font-medium">
                <Link
                  className="  font-semibold text-blue-500 transition duration-150 hover:text-blue-600"
                  href={`/gpts/${item.route}`}
                >
                  {item.title}
                </Link>
              </TableCell>
              <TableCell>{item.content}</TableCell>
              <TableCell>{item.creator}</TableCell>
              <TableCell>
                {item.href && (
                  <Link
                    className="text-lg font-bold text-teal-500 transition duration-150 hover:text-teal-600"
                    href={item.href}
                  >
                    Try it
                  </Link>
                )}
              </TableCell>
              <TableCell className="flex items-center gap-2 text-right">
                <ArrowUp /> {item.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {/* <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow> */}
        </TableFooter>
      </Table>

      {/* <div className="mx-auto max-w-5xl">
        <GiscusApp />
      </div> */}
    </div>
  );
}
