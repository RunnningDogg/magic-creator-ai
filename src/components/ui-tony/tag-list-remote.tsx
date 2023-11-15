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
import { SubmitGPTsForm } from "./submit-form";
import { toast as shadcnToast } from "@/components/ui/use-toast";
import ScrollButton from "./scroll-button";

interface GPTsListProps {
  count: number;
  searchCount?: number;
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
  item?: {
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
  const [filterCategory, setFilterCategory] = useState("title");
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false); // 新增状态，表示是否进行了搜索

  // swr 获取初始数据
  const [pageIndex, setPageIndex] = useState(0);
  const [searchPageIndex, setSearchPageIndex] = useState(0);

  // 父组件处理search的逻辑,透传到子组件

  const fetcher = async (url: string) => {
    console.log("请求url ", url);

    try {
      let response;
      if (isSearching) {
        // const jsonData = JSON.stringify(searchParams);
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query,
            type: filterCategory,
          }),
        });
      } else {
        response = await fetch(url);
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  // 请求
  const { data, error, isLoading } = useSWR<GPTsListProps>(
    isSearching
      ? `/api/posts/search?type=${filterCategory}&query=${query}&page=${searchPageIndex}`
      : `/api/posts?page=${pageIndex}`,
    (url: string) => fetcher(url),
  );

  const { data: count } = useSWR("/api/posts/count", () =>
    fetch("/api/posts/count").then((res) => res.json()),
  );

  // console.log("data, ", data);
  // console.log("count", count);

  const router = useRouter();
  if (error) return <div>failed to load</div>;

  const gptsArray = data?.pageData;

  const searchData = data?.item;

  const searchCount = data?.searchCount;
  console.log("searchCount", searchCount);

  // 渲染的数据
  const displayArray = gptsArray ?? searchData;

  const SelectDemo = () => {
    return (
      <Select
        value={filterCategory}
        onValueChange={(value) => setFilterCategory(value)}
      >
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Title / Author" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filters</SelectLabel>
            <SelectItem value="title">title</SelectItem>
            <SelectItem value="author">author</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };

  return (
    <div className="mx-auto flex min-h-[50vh] flex-col items-center">
      <p className="duration-1200 mb-12 text-base text-gray-500 ease-in-out animate-in fade-in slide-in-from-bottom-4">
        Find innovative GPTs and shared your GPTs with others 👍🏻
        <span className="text-lg font-bold text-sky-500">
          Total {data && count["count"]} GPTs
        </span>
      </p>

      <div className="searchBar mb-10 flex gap-2">
        <SelectDemo />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button
          onClick={() => {
            setIsSearching(true);
            shadcnToast({
              title: "You submitted the following values:",
              description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                  <code className="text-white">
                    {JSON.stringify({
                      query: query,
                      type: filterCategory,
                    })}
                  </code>
                </pre>
              ),
            });
          }}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Search
        </Button>
        <Button onClick={() => setIsSearching(false)}>Clear</Button>
      </div>

      <div className="my-1 ">
        {data && isSearching && (
          <p className="text-blue-500">
            Search Count: <span className="font-semibold"> {searchCount} </span>
          </p>
        )}
      </div>

      {isLoading ? (
        <div className="mt-6 min-h-[50vh]">
          <Loader2 className="h-10 w-10 animate-spin text-blue-500" />{" "}
          loading...
        </div>
      ) : (
        <div className="mb-10 mt-6 grid w-3/4 grid-cols-1 gap-8 bg-slate-100 p-6 transition duration-500 ease-in-out   md:grid-cols-2 lg:grid-cols-3">
          {displayArray &&
            displayArray.map((item, idx) => {
              const imageUrl = item.show_image ? item.show_image : "/gpt.png";
              return (
                <CardContainer
                  onClick={() => router.push(`/gpts/${item.post_id}`)}
                  key={idx}
                  className="card-with-img cursor-pointer rounded border bg-white  transition duration-150 hover:scale-110 hover:border-blue-400 hover:shadow-md"
                >
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      {item.show_name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Powered By GPT
                    </p>
                    <p className="content flex-1">{item.show_desc}</p>
                    {item.author && (
                      <p className="font-semibold text-blue-500">
                        {item.author}
                      </p>
                    )}
                  </div>
                  <div className="relative w-full">
                    <Image
                      src={imageUrl}
                      alt="Picture of the author"
                      // layout="responsive" // This will maintain aspect ratio
                      width={100} // Set desired aspect ratio width
                      height={100} // Set desired aspect ratio height
                      // objectFit="contain" // This will ensure the image is contained within the element
                      className="rounded-full" // Maintain rounded corners
                    />
                  </div>
                </CardContainer>
              );
            })}
        </div>
      )}

      {/* 分页组件 */}

      {!isSearching && (
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
            disabled={pageIndex >= count}
          >
            <ArrowRight /> Next
          </Button>
        </div>
      )}

      {isSearching && (
        <div className="mb-10 flex h-10 items-center gap-3">
          <Button
            disabled={searchPageIndex - 1 < 0}
            onClick={() => setSearchPageIndex(searchPageIndex - 1)}
          >
            Prev
          </Button>
          <Button
            disabled={searchData?.length === 0}
            onClick={() => setSearchPageIndex(searchPageIndex + 1)}
          >
            Next
          </Button>
        </div>
      )}
      <ScrollButton />
    </div>
  );
};

export default TagsListRemote;
