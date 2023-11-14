"use client";
import Image from "next/image";
import CardContainer from "./card-container";
import { Tag } from "./tag";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from "swr";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface GPTsListProps {
  count: number;
  pageData: {
    author?: string;
    id?: string;
    post_id?: string;
    show_url?: string;
    show_desc?: string;
    show_image?: string;
    show_name?: string;
    show_welcome?: string;
  }[];
}

// TagsList 组件
const TagsListRemote: React.FC = () => {
  // swr
  const [pageIndex, setPageIndex] = useState(0);
  const fetcher = () =>
    fetch(`/api/posts?page=${pageIndex}`).then((res) => res.json());
  const { data, error, isLoading } = useSWR<GPTsListProps>(
    `/api/posts?page=${pageIndex}`,
    fetcher,
  );
  const router = useRouter();
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="mt-10 min-h-[50vh]">
        {" "}
        <Loader2 className="h-10 w-10 animate-spin" /> loading...
      </div>
    );

  console.log(data);

  if (!data) {
    return null;
  }

  const gptsArray = data["pageData"];

  return (
    <div className="mx-auto flex min-h-[50vh] flex-col items-center">
      <p className="duration-1200 mb-12 text-base text-gray-500 ease-in-out animate-in fade-in slide-in-from-bottom-4">
        Find innovative GPTs and shared your GPTs with others 👍🏻
        <span className="text-lg font-bold text-sky-500">
          Total {data?.count} GPTs{" "}
        </span>
      </p>

      <div className="mb-10 grid w-3/4 grid-cols-1 gap-8 bg-slate-100 p-6 transition duration-500 ease-in-out   md:grid-cols-2 lg:grid-cols-3">
        {gptsArray.map((item, idx) => (
          <CardContainer
            onClick={() => router.push(`/gpts/${item.post_id}`)}
            key={idx}
            className="card-with-img cursor-pointer rounded border bg-white  transition duration-150 hover:scale-110 hover:border-blue-400 hover:shadow-md"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {item.show_name}
              </h3>
              <p className="text-sm text-muted-foreground">Powered By GPT</p>
              <p className="content flex-1">{item.show_desc}</p>
              {item.author && (
                <p className="font-semibold text-blue-500">{item.author}</p>
              )}
            </div>
            <div className="relative w-full">
              <Image
                src={item.show_image ?? "/react.png"}
                alt="Picture of the author"
                // layout="responsive" // This will maintain aspect ratio
                width={100} // Set desired aspect ratio width
                height={100} // Set desired aspect ratio height
                // objectFit="contain" // This will ensure the image is contained within the element
                className="rounded-full" // Maintain rounded corners
              />
            </div>
          </CardContainer>
        ))}
      </div>

      {/* 分页组件 */}
      <div className="mb-10 flex h-10 items-center gap-3">
        <Button
          onClick={() => setPageIndex(pageIndex - 1)}
          disabled={pageIndex <= 0}
        >
          <ArrowLeft /> Prev
        </Button>
        {pageIndex > 0 && (
          <Button onClick={() => setPageIndex(pageIndex - 1)}>
            {pageIndex}
          </Button>
        )}

        <Button
          onClick={() => setPageIndex(pageIndex)}
          className={cn("bg-blue-800")}
        >
          {pageIndex + 1}
        </Button>
        <Button onClick={() => setPageIndex(pageIndex + 2)}>
          {pageIndex + 2}
        </Button>
        <Button
          onClick={() => setPageIndex(pageIndex + 1)}
          disabled={pageIndex >= data?.count}
        >
          <ArrowRight /> Next
        </Button>
      </div>
    </div>
  );
};

export default TagsListRemote;
