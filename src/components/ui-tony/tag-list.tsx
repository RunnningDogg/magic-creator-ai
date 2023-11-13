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

// 定义 TagsList 的属性类型
interface TagsListProps {
  tags: string[];
  cards: {
    title?: string;
    content?: string;
    tag?: string;
    image?: string;
    href?: string;
    creator?: string;
    route?: string;
  }[];
}

// TagsList 组件
const TagsList: React.FC<TagsListProps> = ({ tags, cards }) => {
  // 记录用户点击的tags
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [filterCategory, setFilterCategory] = useState("title");
  const [query, setQuery] = useState("");

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
  console.log("filter category ", filterCategory);

  // 根据选中的标签过滤卡片
  // Combine both tag and query filtering into a single function
  // const filterCards = () => {
  //   return cards.filter((card) => {
  //     if (card.tag) {
  //       return (
  //         (activeTags.length === 0 || activeTags.includes(card?.tag)) &&
  //         card?.title?.toLowerCase().includes(query.toLowerCase())
  //       );
  //     } else {
  //       switch (filterCategory) {
  //         case "title":
  //           return card?.title?.toLowerCase().includes(query.toLowerCase());
  //         case "author":
  //           return card?.creator?.toLowerCase().includes(query.toLowerCase());
  //         default:
  //           return card?.title?.toLowerCase().includes(query.toLowerCase());
  //       }
  //     }
  //   });
  // };
  const filterCards = () => {
    return cards.filter((card) => {
      // 检查标签是否匹配（如果标签存在）
      const tagMatch =
        activeTags.length === 0 || (card.tag && activeTags.includes(card.tag));

      // 根据 filterCategory 进行内容匹配
      let contentMatch = false;
      switch (filterCategory) {
        case "title":
          contentMatch =
            card.title?.toLowerCase().includes(query.toLowerCase()) ?? false;
          break;
        case "author":
          if (card.creator) {
            contentMatch = card.creator
              .toLowerCase()
              .includes(query.toLowerCase());
          }
          break;
        default:
          contentMatch =
            card.title?.toLowerCase().includes(query.toLowerCase()) ?? false;
      }

      // 返回匹配结果
      return tagMatch && contentMatch;
    });
  };

  // Call filterCards to filter based on both tags and query
  let filteredCards = filterCards();

  const handleTagClick = (tag: string) => {
    // 逻辑1: 如果不存在,加到现有的tags中
    // 逻辑2: 如果存在, filter掉
    if (activeTags.includes(tag)) {
      const newTagArray = activeTags.filter((item) => {
        if (item === tag) {
          return false;
        } else {
          return true;
        }
      });
      setActiveTags(newTagArray);
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  // Update the search query state and filter the cards
  const handleSearch = () => {
    setQuery(query);
  };

  const { status } = useSession();
  const handleThumsUp = async () => {
    // 请求点赞api redis记录
    if (status === "unauthenticated") {
      toast.error("please login to upvote");
      return;
    }
    toast.success("We receive your like!");
  };

  // Use useEffect to update the list of cards when activeTags or query changes
  useEffect(() => {
    filteredCards = filterCards();
    // This will cause the component to re-render with the updated filteredCards
  }, [activeTags, query, filterCategory]); // Add activeTags and query as dependencies

  // todo 加后端
  // useEffect(() => {
  //   async function fetchPost() {
  //     const res = await fetch("/api/posts");
  //     const posts = await res.json();
  //     console.log(posts);
  //   }
  //   fetchPost();
  // });

  const router = useRouter();

  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="searchBar mb-10 flex gap-2">
        <SelectDemo />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* <div className="mt-2 flex flex-wrap gap-2 rounded">
        {tags.map((tag, index) => (
          <Tag
            activeTags={activeTags}
            key={index}
            name={tag}
            className="cursor-pointer p-3 text-[12px] font-semibold"
            handleTagClick={() => handleTagClick(tag)}
          />
        ))}
      </div> */}

      <div className="mb-10 grid w-3/4 grid-cols-1 gap-8 bg-slate-100 p-6 transition duration-500 ease-in-out   md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.map((item, idx) => (
          <CardContainer
            onClick={() => router.push(`/gpts/${item.route}`)}
            key={idx}
            className="card-with-img cursor-pointer rounded border bg-white  transition duration-150 hover:scale-110 hover:border-blue-400 hover:shadow-md"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">Powered By GPT</p>
              <p className="content flex-1">{item.content}</p>
              {item.href && (
                <p className="font-semibold text-blue-500">{item.creator}</p>
              )}
              <Tag name={item?.tag} />
            </div>
            <div className="relative w-full">
              <Image
                src={item.image ?? "/react.png"}
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
    </div>
  );
};

export default TagsList;
