import { Tag } from "./tag";

// 定义 TagsList 的属性类型
interface TagsListProps {
  tags: string | string[];
}

// TagsList 组件
const TagsList: React.FC<TagsListProps> = ({ tags }) => {
  // 确保tags总是数组
  const normalizedTags = Array.isArray(tags) ? tags : [tags];
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {normalizedTags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  );
};

export default TagsList;
