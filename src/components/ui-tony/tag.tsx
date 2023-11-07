import React from "react";

// 定义 Tag 的类型接口
interface TagProps {
  name: string;
}

// Tag 组件
export const Tag: React.FC<TagProps> = ({ name }) => {
  // Tailwind CSS颜色映射
  const colorMapping: { [key: string]: string } = {
    "Creative Services": "bg-blue-100 text-blue-800",
    "Educational Support": "bg-green-100 text-green-800",
    Entertainment: "bg-red-100 text-red-800",
    "Technical Assistance": "bg-teal-100 text-teal-800",
    "Lifestyle & Recreation": "bg-lime-100 text-lime-800",
    // ... 其他颜色映射
  };

  // 获取对应的颜色类
  const colorClasses = colorMapping[name] || "bg-gray-100 text-gray-800"; // 默认颜色

  return (
    <span
      className={`self-start rounded px-2.5 py-0.5 text-xs font-semibold ${colorClasses}`}
    >
      #{name}
    </span>
  );
};
