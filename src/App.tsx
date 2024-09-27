import { ContainerBorderRounded } from "./components/ContainerBorderRounded";
import { Sortable } from "./components/Sortable/Sortable";
import { SortableListItem } from "./components/Sortable/SortableListItem";
import { TCountriesData } from "./utils/types";
import { countriesData } from "./dummyData";

function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <ContainerBorderRounded className="flex flex-col h-[350px] xl:max-w-[350px] 2xl:max-w-[530px]">
        <Sortable<TCountriesData>
          data={countriesData}
          keysToSortBy={["profit", "price"]}
          title="Top Countries"
          renderItem={(item, index) => (
            <SortableListItem item={item} index={index} />
          )}
        />
      </ContainerBorderRounded>
    </main>
  );
}

export default App;
