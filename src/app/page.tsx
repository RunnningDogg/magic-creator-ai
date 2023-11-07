import { SearchBar } from "@/components/ui-tony/search-bar";
import Image from "next/image";
import Link from "next/link";
import CardContainer from "@/components/ui-tony/card-container";
import { Tag } from "@/components/ui-tony/tag";
import { FAQ } from "@/components/v0/faq";
import Footer from "@/components/ui-tony/footer";
import LinksList from "@/components/ui-tony/link-list";

const cards = [
  {
    title: "DALL·E",
    content: "Let me turn your imagination into imagery.",
    tag: "Creative Services",
    image: "/card-dalle.png",
  },
  {
    title: "Data Analysis",
    content:
      "Drop in any field and I can help analyze and visualize your data.",
    tag: "Educational Support",
    image: "/card-da.png",
  },
  {
    title: "ChatGPT Classic",
    content: "The earliest version of GPT-4 with no additional capabilities.",
    tag: "Technical Assistance",
  },
  {
    title: "Game Time",
    content:
      "I can play text-based board games or card games to the rules you supply. Let the games begin!",
    tag: "Entertainment",
    image: "/card-game.png",
  },
  {
    title: "The Negotiator",
    content:
      "I'll help you advocate for yourself and get better outcomes. Become a great negotiator.",
    tag: "Educational Support",
    image: "/card-nego.png",
  },
  {
    title: "Creative Writing Coach",
    content:
      "I'm eager to read your work and give you feedback to improve your results.",
    tag: "Educational Support",
    image: "/card-writing-coach.png",
  },
  {
    title: "Cosmic Dream",
    content: "Visionary painter digital wonder.",
    tag: "Creative Services",
    image: "/card-cosmic.png",
  },
  {
    title: "Tech Support Advisor",
    content:
      "From setting up a printer to troubleshooting a device, I'm here to help you step-by-step.",
    tag: "Technical Assistance",
  },
  {
    title: "Coloring Book Hero",
    content: "Take any idea and turn it into whimsical coloring book pages.",
    tag: "Creative Services",
  },
  {
    title: "Laundry Buddy",
    content:
      "Ask me anything about stains, settings, sorting and everything else laundry.",
    tag: "Lifestyle & Recreation",
  },
  {
    title: "Sous Chef",
    content:
      "I'll give you recipes based on the foods you love and ingredients you have.",
    tag: "Lifestyle & Recreation",
  },
  {
    title: "Sticker Whiz",
    content:
      "I'll help turn your wildest dreams into die-cut stickers, shipped right to your door.",
    tag: "Creative Services",
  },
  {
    title: "Math Mentor",
    content:
      "Need help or practice help with math? Need a 98% refresh on geometry proofs? I'm here to help you.",
    tag: "Educational Support",
  },
  {
    title: "Hot Melts",
    content:
      "Let's ready your image into something really wild. Upload an image and let's go!",
    tag: "Creative Services",
  },
  {
    title: "Mocktail Mixologist",
    content:
      "I'll make any party a blast with mocktail recipes with whatever ingredients you have on hand.",
    tag: "Lifestyle & Recreation",
  },
  {
    title: "gen z meme",
    content: "Help u understand the lingo & the latest memes.",
    tag: "Educational Support",
  },
];

const links = [
  {
    href: "https://openai.com/blog/introducing-gpts",
    text: "Introducing GPTs",
    desc: "OpenAI introduces GPTs, enabling easy creation of custom ChatGPTs for specific tasks, soon shareable via the upcoming GPT Store",
  },
  {
    href: "https://openai.com/blog/new-models-and-developer-products-announced-at-devday",
    text: "New models and developer products announced at DevDay",
    desc: "OpenAI DevDay reveals GPT-4 Turbo, Assistants API, and multimodal AI enhancements for advanced developer integration",
  },
];

export default function Home() {
  return (
    <>
      {/* max-w-5xl */}
      <header className=" sticky top-0 z-20 mx-auto flex w-full  flex-row  flex-nowrap items-stretch justify-between border-b px-4 py-3 backdrop-blur-md duration-1000 ease-in-out animate-in fade-in slide-in-from-top-4 sm:px-6">
        {/* h-14 */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            className="rounded"
            alt="logo"
            src={"/magic-creator.png"}
            width={48}
            height={48}
          />
          <span className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
            GPTs Store AI
          </span>
        </Link>
      </header>

      <main className="flex flex-col items-center justify-center py-[10vh] sm:py-[10vh]">
        <h1 className="mb-3 text-4xl font-medium text-black duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-3">
          GPTs Store AI
        </h1>

        <p className="duration-1200 mb-12 text-base text-gray-500 ease-in-out animate-in fade-in slide-in-from-bottom-4">
          Shared your GPTs (Aka GPT workflow) with others 👍🏻
        </p>

        {/* input area to search workflow */}

        <div className="searchBar mb-10">
          <SearchBar />
        </div>

        {/* show area */}
        <div className="mb-10 grid w-3/4 grid-cols-2 gap-2 bg-slate-100 px-4 py-8">
          {cards.map((item, idx) => (
            <CardContainer
              key={idx}
              className="card-with-img rounded border   bg-white hover:border-blue-400 "
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">Powered By GPT</p>
                <p className="content">{item.content}</p>
                <Tag name={item.tag} />
              </div>
              <div className="relative h-32 w-32">
                {/* // "relative" is required; adjust sizes to your liking */}
                <Image
                  src={item.image ?? "/react.png"}
                  alt="Picture of the author"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
            </CardContainer>
          ))}
        </div>

        {/* faq */}
        <FAQ />

        {/* related links */}
        <LinksList className="mt-10" links={links} />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}
