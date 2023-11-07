import { cn } from "@/lib/utils";
import Link from "next/link";

type ListItemType = {
  href: string;
  text: string;
  desc: string; // 新增描述字段
};

export default function LinksList({
  links,
  className,
  ...props
}: {
  links: ListItemType[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center space-y-4  ", className)}>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Related Links
      </h3>

      <div className="flex flex-col space-y-8">
        {links.map((link, index) => (
          <div key={index} className="flex flex-col rounded-md bg-white p-2 ">
            <Link
              className="rounded-md p-2 text-lg font-semibold text-gray-800 transition-colors duration-300 ease-in-out   hover:text-blue-600    "
              key={index}
              href={link.href}
              target="_blank"
            >
              {link.text}
            </Link>
            <p className=" max-w-md p-2 text-sm text-gray-600">{link.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
