"use client";
import { createRedisInstance } from "@/lib/redis";
import React, { useState } from "react";

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

import Link from "next/link";
import { ArrowUp, Loader2, Vote } from "lucide-react";
import useSWR from "swr";
import GiscusApp from "@/components/ui-tony/giscus";

type GPTSArray = {
  gptData: {
    author?: string;
    id?: string;
    post_id?: string;
    short_url?: string;
    show_desc?: string;
    show_image?: string;
    show_name?: string;
    show_welcome?: string;
    score?: number;
  }[];
};

export default function TrendingPage() {
  const { data, isLoading } = useSWR<GPTSArray>("/api/posts/viewed", () =>
    fetch("/api/posts/viewed").then((res) => res.json()),
  );

  // console.log(data);

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-5xl">
      <h1 className=" mt-3 text-center text-3xl font-bold">Trending GPTs</h1>

      <Alert className=" mx-auto mt-6 max-w-xl">
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle className="text-center">Sort Algorithm💻</AlertTitle>
        <AlertDescription>
          <p className="text-center  font-bold">Sort By PV, 24 hour</p>
        </AlertDescription>
      </Alert>

      <h2 className="mt-8 text-center text-xl  font-bold">Most View GPTs!</h2>

      {isLoading ? (
        <div className="min-h-[80vh]">
          {" "}
          <div className="absolute  top-1/2 flex  w-full flex-col items-center">
            <Loader2 className="h-10 w-10 animate-spin text-center text-blue-500" />{" "}
            loading...{" "}
          </div>
        </div>
      ) : (
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
            {data?.gptData.map((item) => (
              <TableRow key={item?.post_id}>
                <TableCell className="font-medium">
                  <Link
                    className="  font-semibold text-blue-500 transition duration-150 hover:text-blue-600"
                    href={`/gpts/${item.post_id}`}
                  >
                    {item.show_name}
                  </Link>
                </TableCell>
                <TableCell>{item.show_desc}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>
                  {item.short_url && (
                    <Link
                      className="text-lg font-bold text-teal-500 transition duration-150 hover:text-teal-600"
                      href={`https://chat.openai.com/g/${item.short_url}`}
                    >
                      Try
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
      )}
      <div className="mb-8"></div>
      <GiscusApp />
    </div>
  );
}
