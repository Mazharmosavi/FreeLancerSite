import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import Loading from "../../../ui/Loading";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";

const sortOptions = [
  { label: "مرتب سازی بر اساس (جدید ترین)", value: "latest" },
  { label: "مرتب سازی بر اساس (قدیمی ترین)", value: "earliest" },
];
const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];
function ProjectHeader() {
  const { isFetched, categories, transformedCategories } =
    useCategories() || [];
  console.log(isFetched);
  return (
    <div className="flex flex-col items-start justify-between text-secondary-700 mb-8 gap-y-2 w-fit">
      <h1 className="font-bold text-lg w-60">لیست پروژه های قابل اخذ</h1>
      {!isFetched ? (
        <Loading />
      ) : (
        <div className="flex gap-x-2 w-fit">
          <Filter filterField={"status"} options={statusOptions} />
          <FilterDropDown filterField="sort" options={sortOptions} />
          <FilterDropDown
            filterField={"category"}
            options={[
              { value: "ALL", label: "همه دسته بندی ها" },
              ...transformedCategories,
            ]}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectHeader;
