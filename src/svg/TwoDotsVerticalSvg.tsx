import { FC } from "react";
import { cn } from "../utils/utils";

export interface ITwoDotsVerticalSvg {
  width?: string;
  height?: string;
  strokeColor?: string;
  className?: string;
  onClick?: () => void;
}

export const TwoDotsVerticalSvg: FC<ITwoDotsVerticalSvg> = ({
  width = "12",
  height = "12",
  strokeColor = "var(--clr-charcoal-grey)",
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <svg
        className={cn("mt-0.5", className)}
        width={width}
        height={height}
        stroke={strokeColor}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="40" r="40" fill="#737373" />
        <circle cx="100" cy="160" r="40" fill="#737373" />
      </svg>
    </button>
  );
};
