import React from "react";
import styles from "./card-container.module.css";
import { cn } from "@/lib/utils";

type Props = {} & React.PropsWithChildren;

export default function CardContainer({ children }: Props) {
  return <div className={cn(styles["card-container"])}>cardContainer</div>;
}
