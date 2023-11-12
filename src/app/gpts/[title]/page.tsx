"use client";
import GiscusApp from "@/components/ui-tony/giscus";
import data from "../../data.json";
import Link from "next/link";

// 假设这是你data.json中的数据类型

type CardsType = {
  title?: string;
  content?: string;
  tag?: string;
  image?: string;
  href?: string;
  route?: string;
  creator?: string;
};

function getPostData(title: string) {
  console.log(data.length);
  console.log(title);

  const res = data.filter((item) => {
    return item.route === title;
  });
  return res[0];
}

export default function Page({ params }: { params: { title: string } }) {
  // 使用 cardData 渲染页面
  const gptsData = getPostData(params.title);
  console.log(gptsData);

  return (
    <div className="mx-auto flex   max-w-4xl flex-1 flex-col rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-4 text-center text-3xl font-semibold">
        {gptsData.title}
      </h1>

      <h2 className="mb-3 text-xl font-semibold">Description</h2>

      <p className="mb-4 text-gray-700">{gptsData.content}</p>

      <h2 className="mb-3 text-xl font-semibold">Author</h2>
      {gptsData.tag ? (
        <p className="mb-4 font-semibold  text-teal-600">{gptsData.creator}</p>
      ) : (
        <p className="mb-4  font-semibold text-teal-600">To be added</p>
      )}

      <h2 className="mb-3 text-xl font-semibold">Tags</h2>
      {gptsData.tag ? (
        <p className="mb-4 font-semibold  text-blue-600">{gptsData.tag}</p>
      ) : (
        <p className="mb-4  font-semibold text-blue-600">To be added</p>
      )}

      <h2 className="mb-3 text-xl font-bold">URL</h2>
      {gptsData.href ? (
        <Link
          className=" mb-5 font-semibold text-teal-600 transition duration-150 hover:text-teal-700 hover:underline"
          href={gptsData.href}
        >
          Give a Try
        </Link>
      ) : (
        "-"
      )}
      {gptsData.href && (
        <iframe
          className="mb-5 h-[50vh] w-full border-2 border-teal-500"
          src={gptsData.href}
        ></iframe>
      )}

      <GiscusApp />
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { title } = context.params as { title: string };
//   const cardData = data.find((card) => card.title === title);
//   return { props: { cardData } };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = data.map((card) => ({ params: { route: card.title } }));
//   return {
//     paths,
//     fallback: false, // 或者 'blocking'，如果你想要对新路径进行服务器端渲染
//   };
// };
