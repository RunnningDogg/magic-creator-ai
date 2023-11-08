import { SearchBar } from "@/components/ui-tony/search-bar";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/v0/faq";
import Footer from "@/components/ui-tony/footer";
import LinksList from "@/components/ui-tony/link-list";
import TypeWriter from "@/components/ui-tony/type-writer";
import SquigglyLines from "@/components/ui-tony/SquigglyLines";
import TagsList from "@/components/ui-tony/tag-list";

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
    image: "/gpt.png",
  },
  {
    title: "Game Time",
    content:
      "I can play text-based board games or card games to the rules you supply. Let the games begin!",
    tag: "Entertainment",
    image: "/game-time.png",
    href: "https://chat.openai.com/g/g-Sug6mXozT-game-time",
  },
  {
    title: "The Negotiator",
    content:
      "I'll help you advocate for yourself and get better outcomes. Become a great negotiator.",
    tag: "Educational Support",
    image: "/negotiator.png",
    href: "https://chat.openai.com/g/g-TTTAK9GuS-the-negotiator",
  },
  {
    title: "Creative Writing Coach",
    content:
      "I'm eager to read your work and give you feedback to improve your results.",
    tag: "Educational Support",
    image: "/card-writing-coach.png",
    href: "https://chat.openai.com/g/g-lN1gKFnvL-creative-writing-coach",
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
    image: "/tech-support.jpg",
    href: "https://chat.openai.com/g/g-WKIaLGGem-tech-support-advisor",
  },
  {
    title: "Coloring Book Hero",
    content: "Take any idea and turn it into whimsical coloring book pages.",
    tag: "Creative Services",
    image: "/card-coloring.png",
  },
  {
    title: "Laundry Buddy",
    content:
      "Ask me anything about stains, settings, sorting and everything else laundry.",
    tag: "Lifestyle & Recreation",
    image: "/laundry-buddy.png",
    href: "https://chat.openai.com/g/g-QrGDSn90Q-laundry-buddy",
  },
  {
    title: "Sous Chef",
    content:
      "I'll give you recipes based on the foods you love and ingredients you have.",
    tag: "Lifestyle & Recreation",
    image: "/sous-chef.jpg",
    href: "https://chat.openai.com/g/g-3VrgJ1GpH-sous-chef",
  },
  {
    title: "Sticker Whiz",
    content:
      "I'll help turn your wildest dreams into die-cut stickers, shipped right to your door.",
    tag: "Creative Services",
    image: "/sticker-wizard.png",
    href: "https://chat.openai.com/g/g-gPRWpLspC-sticker-whiz",
  },
  {
    title: "Math Mentor",
    content:
      "Need help or practice help with math? Need a 98% refresh on geometry proofs? I'm here to help you.",
    tag: "Educational Support",
    image: "/math-mentor.png",
    href: "https://chat.openai.com/g/g-ENhijiiwK-math-mentor",
  },
  {
    title: "Hot Mods",
    content:
      "Let's modify your image into something really wild. Upload an image and let's go!",
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

const tags = [
  "Creative Services",
  "Educational Support",
  "Technical Assistance",
  "Entertainment",
  "Lifestyle & Recreation",
];

export default function Home() {
  return (
    <>
      {/* max-w-5xl */}
      <header className=" sticky top-0 z-20 mx-auto flex w-full flex-row  flex-nowrap  items-center   justify-between border-b px-4 py-3 backdrop-blur-md duration-1000 ease-in-out animate-in fade-in slide-in-from-top-4 sm:px-6">
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
            GPTs Store
          </span>
        </Link>

        <ul className="flex space-x-3">
          <Link
            href="https://ko-fi.com/F1F0QT7HI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={36}
              width={162} // 你需要提供正确的宽度
              src="/kofi_button_red.png"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </Link>
          <Link
            href="https://github.com/RunnningDogg/GPTs-Store/issues/1"
            target="_blank"
            className="hover:text-blue-500"
          >
            Submit GPTs
          </Link>
        </ul>
      </header>

      <main className="flex flex-col items-center justify-center py-[10vh] sm:py-[10vh]">
        <h1 className="mb-3 text-4xl font-bold text-black duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-3">
          GPTs Store{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <TypeWriter
              className="relative"
              typingSpeed={100}
              deletingSpeed={75}
              textArray={[
                "DALL·E",
                "Data Analysis",
                "ChatGPT Classic",
                "Game Time",
                "The Negotiator",
                "Creative Writing Coach",
                "Cosmic Dream",
                "Tech Support Advisor",
                "Coloring Book Hero",
                "Laundry Buddy",
                "Sous Chef",
                "Sticker Whiz",
                "Math Mentor",
                "Hot Melts",
                "Mocktail Mixologist",
                "gen z meme",
              ]}
            />
          </span>{" "}
        </h1>

        <p className="duration-1200 mb-12 text-base text-gray-500 ease-in-out animate-in fade-in slide-in-from-bottom-4">
          Find innovative GPTs and shared your GPTs (Aka GPT workflow) with
          others 👍🏻
        </p>

        {/* input area to search workflow */}

        {/* <div className="searchBar mb-10">
          <SearchBar />
        </div> */}

        <div>
          <TagsList tags={tags} cards={cards} />
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
