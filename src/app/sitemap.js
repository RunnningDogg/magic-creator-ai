
import cards from "./data.json";

export default function sitemap() {
  // return [
  //   {
  //     url: "https://gpts-store.net",
  //     lastModified: new Date(),
  //     changeFrequency: "daily",
  //     priority: 1,
  //   },
  //   {
  //     url: "https://www.gpts-store.net",
  //     lastModified: new Date(),
  //     changeFrequency: "daily",
  //     priority: 0.8,
  //   },
  // ];
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

  const cardEntries = cards
    .filter((card) => typeof card.href === "string") // 只处理 href 为字符串的条目
    .map((card) => ({
      url: card.href, // 现在 card.href 确定是字符串
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5, // 根据需要调整优先级
    }));

  return [...sitemapArray, ...cardEntries];
}
