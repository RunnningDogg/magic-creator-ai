
import cards from "./data.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function sitemap() {

  const urls = await prisma.gpts.findMany({
    select: {
      short_url: true
    }
  });


  const sitemapArray = [
    {
      url: "https://gpts-store.net",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.gpts-store.net",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const newUrls = urls.map(item => {
    return {
      url: `https://gpts-store.net/gpts/${item}`, // 现在 card.href 确定是字符串
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5, // 根据需要调整优先级
    }
  })

  // const cardEntries = cards
  //   .filter((card) => typeof card.href === "string") // 只处理 href 为字符串的条目
  //   .map((card) => ({
  // url: `https://gpts-store.net/gpts/${card.route}`, // 现在 card.href 确定是字符串
  // lastModified: new Date(),
  // changeFrequency: "daily",
  // priority: 0.5, // 根据需要调整优先级
  //   }));

  return [...sitemapArray, ...newUrls];
}
