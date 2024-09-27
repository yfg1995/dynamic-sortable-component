import { FC } from "react";
import { cn } from "../utils/utils";

export interface IArrowSvg {
  width: string;
  height: string;
  strokeColor: string;
  className?: string;
  onClick?: () => void;
}

export const ArrowSvg: FC<IArrowSvg> = ({
  width,
  height,
  strokeColor,
  className,
}) => {
  return (
    <svg
      className={cn("mt-0.5", className)}
      width={width}
      height={height}
      stroke={strokeColor}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  );
};
