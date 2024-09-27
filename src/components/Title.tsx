import { FC } from "react";
import { cn } from "../utils/utils";

export interface ITitle {
  title: string;
  className?: string;
}

export const Title: FC<ITitle> = ({ title, className }) => {
  return <div className={cn("font-bold", className)}>{title}</div>;
};
