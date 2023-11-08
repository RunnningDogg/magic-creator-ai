import { cn } from "@/lib/utils";
import React from "react";

// 定义 Tag 的类型接口
interface TagProps {
  name: string;
  className?: string;
  activeTags?: string[];
  handleTagClick?: () => void;
}

// Tag 组件
export const Tag: React.FC<TagProps> = ({
  name,
  className,
  activeTags,
  handleTagClick,
}) => {
  // Tailwind CSS颜色映射
  const colorMapping: { [key: string]: string } = {
    "Creative Services": "blue",
    "Educational Support": "green",
    Entertainment: "red",
    "Technical Assistance": "teal",
    "Lifestyle & Recreation": "lime",
    // "Lifestyle & Recreation": "bg-lime-100 text-lime-800 hover:bg-lime-300",
  };

  const styleMapping: { [key: string]: string } = {
    blue: "text-blue-800 hover:bg-blue-300 bg-blue-100",
    green: "text-green-800 hover:bg-green-300 bg-green-100",
    red: "text-red-800 hover:bg-red-300 bg-red-100",
    teal: "text-teal-800 hover:bg-teal-300 bg-teal-100",
    lime: "text-lime-800 hover:bg-lime-300 bg-lime-100",
  };

  // 获取对应的颜色类
  const colorClasses = colorMapping[name];

  // 根据颜色去匹配样式
  const styleClass = styleMapping[colorClasses] || "bg-gray-100 text-gray-800"; // 默认颜色

  return (
    <span
      className={cn(
        `self-start rounded px-2.5 py-0.5 text-xs font-semibold ${styleClass}`,
        className,
        {
          "bg-blue-300": activeTags?.includes(name) && colorClasses === "blue",
          "bg-green-300":
            activeTags?.includes(name) && colorClasses === "green",
          "bg-red-300": activeTags?.includes(name) && colorClasses === "red",
          "bg-teal-300": activeTags?.includes(name) && colorClasses === "teal",
          "bg-lime-300": activeTags?.includes(name) && colorClasses === "lime",
        },
      )}
      onClick={handleTagClick}
    >
      #{name}
    </span>
  );
};
