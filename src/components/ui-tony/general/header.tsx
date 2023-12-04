import Link from "next/link";
import React from "react";
import { SubmitDialog } from "../submit-dialog";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/option";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut, User, Users } from "lucide-react";

type Props = {};

export default async function Header({}: Props) {
  const session = await getServerSession(options);
  return (
    <header className=" sticky top-0 z-20 mx-auto flex w-full flex-row  flex-nowrap  items-center   justify-between border-b px-4 py-3 backdrop-blur-md duration-1000 ease-in-out animate-in fade-in slide-in-from-top-4 sm:px-6">
      {/* h-14 */}
      <div className="flex items-center gap-2">
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
        <Link
          className=" ml-8 border-b border-b-blue-500 text-lg font-semibold text-blue-500 transition duration-150 hover:text-blue-700"
          href="/trending"
        >
          Mote voted GPTs🙌
        </Link>
        <Link
          className=" ml-8 border-b border-b-teal-500 text-lg font-semibold text-teal-500 transition duration-150 hover:text-teal-700"
          href="/mostview"
        >
          Mote viewed GPTs🔥
        </Link>
      </div>

      <nav className="flex items-center space-x-3">
        <SubmitDialog />

        <div className="flex gap-3">
          {/* 区分登录和非登录 */}
          {!session ? (
            <Button>
              <Link href="/api/auth/signin">Sign In</Link>
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-base font-bold">Hi</span>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {session?.user?.image ? (
                    <Avatar>
                      <AvatarImage src={session?.user.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-20">
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <Link
                      className="hover:text-blue-500"
                      href="/api/auth/signout"
                    >
                      <span>Log out</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
