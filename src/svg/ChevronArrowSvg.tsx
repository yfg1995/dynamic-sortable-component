import { FC } from "react";

export interface IChevronArrowSvg {
  width?: string;
  height?: string;
  strokeColor?: string;
  strokeWidth?: string;
  className?: string;
}

export const ChevronArrowSvg: FC<IChevronArrowSvg> = ({
  width = "12",
  height = "12",
  strokeColor = "white",
  strokeWidth = "2.5",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
