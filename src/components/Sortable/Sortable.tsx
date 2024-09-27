import _ from "lodash";
import { ReactElement, useMemo, useState } from "react";
import { SortableList } from "./SortableList";
import { SortableSortButton } from "./SortableSortButton";
import { Title } from "../Title";
import { PlusCircleSvg } from "../../svg/PlusCircleSvg";

export type TSortableData = {
  id: string | number;
};

export interface ISortable<T extends TSortableData> {
  data: T[];
  keysToSortBy?: Array<keyof T>;
  title: string;
  renderItem: (item: T, index: number) => ReactElement;
}

export const Sortable = <T extends TSortableData>({
  data,
  keysToSortBy,
  title,
  renderItem,
}: ISortable<T>) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [descendingOrder, setDescendingOrder] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>();

  const displayedData = useMemo(() => {
    return showAll ? data : data.slice(0, 4);
  }, [showAll, data]);

  const sortByObjectKey = () => {
    if (!currentKey) return [];
    const sorted = _.sortBy(displayedData, currentKey);
    return descendingOrder ? [...sorted].reverse() : sorted;
  };

  const handleSorting = (objectKey: string) => {
    setDescendingOrder((prev) => !prev);
    setCurrentKey(objectKey);
  };

  const sortedData = Boolean(currentKey)
    ? sortByObjectKey()
    : [...displayedData];

  const handleToggle = () => {
    setShowAll((prev) => {
      if (prev) {
        setCurrentKey(undefined);
      }
      return !prev;
    });
    setDescendingOrder(false);
  };

  return (
    <>
      <div className="flex justify-between">
        <Title title={title} />

        <button>
          <PlusCircleSvg />
        </button>
      </div>

      <div className="mt-1 text-brandTextGray">
        {showAll ? (
          <div className="flex items-center gap-3">
            <div>Sort by:</div>

            {keysToSortBy?.map((key) => (
              <SortableSortButton
                key={String(key)}
                title={String(key)[0].toUpperCase() + String(key).slice(1)}
                objectKey={String(key)}
                selectedObjKey={String(currentKey)}
                onClick={() => handleSorting(String(key))}
              />
            ))}
          </div>
        ) : (
          "Favorites"
        )}
      </div>

      <SortableList items={sortedData} renderItem={renderItem} />

      <div
        className="text-center text-brandTextGray mt-auto cursor-pointer select-none"
        onClick={handleToggle}
      >
        {showAll ? "Show Favorites" : "Show All"}
      </div>
    </>
  );
};
