import { FC, useEffect, useState } from "react";
import { cn } from "../../utils/utils";
import { motion } from "framer-motion";
import { ChevronArrowSvg } from "../../svg/ChevronArrowSvg";

export interface ISortableSortButton {
  objectKey: string;
  selectedObjKey: string;
  title: string;
  classNameWrap?: string;
  classNameText?: string;
  onClick?: () => void;
}

export const SortableSortButton: FC<ISortableSortButton> = ({
  objectKey,
  selectedObjKey,
  title,
  classNameWrap,
  classNameText,
  onClick,
}) => {
  const [mode, setMode] = useState(false);

  const onClickHandler = () => {
    setMode((prev) => !prev);
    onClick?.();
  };

  useEffect(() => {
    if (selectedObjKey !== objectKey) {
      setMode(false);
    }
  }, [selectedObjKey, objectKey]);

  return (
    <div
      className={cn(
        "flex items-center gap-1 cursor-pointer select-none",
        classNameWrap
      )}
      onClick={onClickHandler}
    >
      <div className={classNameText}>{title}</div>

      <div className="flex w-[12px] h-[12px] overflow-hidden mt-0.5">
        <motion.div
          animate={{
            translateY:
              selectedObjKey !== objectKey
                ? "calc(12px * -1)"
                : mode
                ? "calc(12px * 0)"
                : "calc(12px * -2)",
          }}
          className="flex flex-col shrink-0"
        >
          <ChevronArrowSvg
            strokeColor="var(--clr-charcoal-grey)"
            strokeWidth="2.5"
            className="rotate-90 shrink-0 w-[12px] h-auto"
          />

          <span className="flex justify-center items-center w-full h-[12px] shrink-0">
            <svg width="8" height="1" viewBox="0 0 8 1">
              <rect
                x="0"
                y="0"
                width="8"
                height="1"
                fill="var(--clr-charcoal-grey)"
              />
            </svg>
          </span>

          <ChevronArrowSvg
            strokeColor="var(--clr-charcoal-grey)"
            strokeWidth="2.5"
            className="-rotate-90 shrink-0 w-[12px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};
