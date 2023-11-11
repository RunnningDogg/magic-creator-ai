import React from "react";

type Props = {};

import Giscus from "@giscus/react";

export default function GiscusApp() {
  return (
    <Giscus
      id="comments"
      repo="RunnningDogg/GPTs-Store"
      repoId="R_kgDOKrFznQ"
      category="Announcements"
      categoryId="DIC_kwDOKrFznc4Ca4IP"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
