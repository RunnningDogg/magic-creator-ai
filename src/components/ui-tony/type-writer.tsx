"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import styles from "./type-writer.module.css";
type Props = {
  textArray: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  hoverInterval?: number;
} & React.PropsWithChildren;

export default function TypeWriter({
  textArray,
  children,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  hoverInterval = 700,
  ...props
}: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      // 回退字符
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // 如果回退完了，切换到下一个字符串
        setTextIndex((prev) => (prev + 1) % textArray.length);
        setIsDeleting(false);
      }
    } else {
      // 打印字符
      if (charIndex < textArray[textIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + textArray[textIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // 如果打印完成，开始回退
        timeoutId = setTimeout(() => setIsDeleting(true), hoverInterval);
      }
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [textArray, textIndex, charIndex, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span
      className={cn(
        "text-4xl font-bold text-blue-400 ",
        // repeat-infinite after:ml-0.5 after:content-['|']
        styles["typewriter"],
        className,
      )}
      {...props}
    >
      {displayedText}
    </span>
  );
}
