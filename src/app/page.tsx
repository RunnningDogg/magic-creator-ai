"use client";
import { FAQ } from "@/components/v0/faq";
import LinksList from "@/components/ui-tony/link-list";
import TypeWriter from "@/components/ui-tony/type-writer";
import SquigglyLines from "@/components/ui-tony/SquigglyLines";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import TagsListRemote from "@/components/ui-tony/tag-list-remote";

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

      <main className="flex w-full flex-col items-center justify-center ">
        {/* py-[10vh] sm:py-[5vh] */}

        <h1 className="mb-3 mt-10 text-4xl font-bold text-black duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-3">
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

        <div className="flex gap-3">
          <a
            href="https://www.producthunt.com/posts/gpts-store?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gpts&#0045;store"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=425391&theme=light"
              alt="GPTs&#0045;store - Explore&#0044;&#0032;Vote&#0044;&#0032;and&#0032;Discuss&#0058;&#0032;explore&#0032;the&#0032;World&#0032;of&#0032;GPTs | Product Hunt"
              // style="width: 250px; height: 54px;"
              className="h-[54px] w-[250px]"
              width="250"
              height="54"
            />
          </a>
          {/* <Alert className="w-xl">
            
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              <p className="font-bold">
                Vote for your favorite GPTs in content page
              </p>
            </AlertDescription>
          </Alert> */}
        </div>
        <div className="mt-3 min-h-[50vh]">
          <TagsListRemote />
        </div>

        {/* input area to search workflow */}

        {/* <div>
          <TagsList tags={tags} cards={cards} />
        </div> */}

        {/* faq */}
        <FAQ />

        {/* related links */}
        <LinksList className="mt-10" links={links} />
      </main>
    </>
  );
}
