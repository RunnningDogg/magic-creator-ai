import React from "react";
import styles from "./card-container.module.css";
import { cn } from "@/lib/utils";

type Props = {
  className: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
} & React.PropsWithChildren;

export default function CardContainer({
  className,
  children,
  ...props
}: Props) {
  return (
    <div className={cn(styles["card-container"], className)} {...props}>
      {children}
    </div>
  );
}
