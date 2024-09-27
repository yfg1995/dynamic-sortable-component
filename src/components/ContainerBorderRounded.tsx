import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

export interface IContainerBorderRounded
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ContainerBorderRounded: FC<IContainerBorderRounded> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "rounded-[12px] p-4 overflow-hidden w-full h-full bg-brandCharcoalBlack",
        className
      )}
    >
      {children}
    </div>
  );
};
