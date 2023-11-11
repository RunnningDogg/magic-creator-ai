import Link from "next/link";
import React from "react";
import { SubmitDialog } from "../submit-dialog";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
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

      <ul className="flex items-center space-x-3">
        <Link
          href="https://ko-fi.com/F1F0QT7HI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={100}
            width={162} // 你需要提供正确的宽度
            src="/kofi_button_red.png"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </Link>

        <SubmitDialog />
      </ul>
    </header>
  );
}
