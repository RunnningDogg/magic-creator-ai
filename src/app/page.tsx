import { SearchBar } from "@/components/ui-tony/search-bar";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    title: "Mountain Adventure",
    content: "Join us for an exciting trek through the mountains.",
    footer: "Posted 2 days ago",
  },
  {
    title: "Culinary Delights",
    content: "Explore the best gourmet experiences in the city.",
    footer: "Posted 5 days ago",
  },
  {
    title: "Tech Innovations",
    content: "Dive into the latest in tech and gadgets.",
    footer: "Posted 1 day ago",
  },
  {
    title: "Art and Culture",
    content: "Discover hidden art scenes around town.",
    footer: "Posted 3 weeks ago",
  },
  {
    title: "Fitness Challenges",
    content: "Push your limits with our latest fitness challenges.",
    footer: "Posted 1 month ago",
  },
  {
    title: "Gardening Tips",
    content: "Grow a lush garden with expert advice.",
    footer: "Posted 2 weeks ago",
  },
  {
    title: "Photography 101",
    content: "Learn the basics of capturing stunning photos.",
    footer: "Posted 1 week ago",
  },
  {
    title: "Sustainable Living",
    content: "Embrace eco-friendly habits for a better tomorrow.",
    footer: "Posted 4 days ago",
  },
  {
    title: "Business Strategies",
    content: "Enhance your business acumen with our strategies.",
    footer: "Posted 3 months ago",
  },
  {
    title: "Travel on a Budget",
    content: "See the world without breaking the bank.",
    footer: "Posted 6 days ago",
  },
];

export default function Home() {
  return (
    <>
      {/* max-w-5xl */}
      <header className=" sticky top-0 z-20 mx-auto flex w-full  flex-row  flex-nowrap items-stretch justify-between border-b bg-gray-100 px-4 py-3 duration-1000 ease-in-out animate-in fade-in slide-in-from-top-4 sm:px-6">
        {/* h-14 */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            className="rounded"
            alt="logo"
            src="/magic-creator.png"
            width={48}
            height={48}
          />
          <span className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
            Magic Creator
          </span>
        </Link>
      </header>

      <main className="flex flex-col items-center justify-center py-[10vh] sm:py-[10vh]">
        <h1 className="mb-3 text-4xl font-medium text-black duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-3">
          Magic Creator AI
        </h1>

        <ul>
          <li>Instructions</li>
          <li>Expanded Knowledges</li>
          <li>Actions</li>
        </ul>

        <p className="duration-1200 mb-12 text-base text-gray-500 ease-in-out animate-in fade-in slide-in-from-bottom-4">
          Shared your Magin Creator (Aka GPT workflow) with others
        </p>

        {/* input area to search workflow */}

        <div className="searchBar mb-10">
          <SearchBar />
        </div>

        {/* show area */}
        <div className=" grid w-[50rem]  max-w-5xl grid-cols-1 gap-4 bg-slate-100 p-4 md:grid-cols-2 lg:grid-cols-2">
          {/* Repeat this block for each card */}
          {cards.map((card) => (
            <Card key={card.title}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
              <CardFooter className="flex space-x-3">
                <span>Tag: </span>
                <span>Card Footer</span>
              </CardFooter>
            </Card>
          ))}

          {/* End card block */}
        </div>
      </main>
    </>
  );
}
