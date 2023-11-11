import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/v0/faq";
import Footer from "@/components/ui-tony/footer";
import LinksList from "@/components/ui-tony/link-list";
import TypeWriter from "@/components/ui-tony/type-writer";
import SquigglyLines from "@/components/ui-tony/SquigglyLines";
import TagsList from "@/components/ui-tony/tag-list";
import { SubmitDialog } from "@/components/ui-tony/submit-dialog";

import cards from "./data.json";

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

      <main className="flex w-full flex-col items-center justify-center py-[10vh] sm:py-[10vh]">
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
          Find innovative GPTs and shared your GPTs with others 👍🏻
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
    </>
  );
}
