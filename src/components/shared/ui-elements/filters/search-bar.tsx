import { useState, useCallback, memo } from "react";
import type { SearchBarProps } from "@chefdev-types/filters/filter-types";

export const SearchBar = memo(({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // console.log("call back",e.target.value);
      setSearchTerm(e.target.value);
      onSearch(e.target.value);
    },
    [onSearch],
  );

  return (
    <input
      className="flex-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   dark:bg-gray-800 dark:text-white"
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={onChange}
    />
  );
});
