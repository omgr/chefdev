import { RecipeCard } from "@components/features/recipe/recipe-card";
import { mockRecipes } from "@data/mockRecipes";
import type { Recipe } from "@chefdev-types/recipe/recipe-types";
import { useState,useMemo } from "react";
import { SearchBar } from "@components/shared/ui-elements/filters/search-bar";
import { useDebounce } from "@hooks/filter-hooks";

export function RecipeCollection() {
    const [searchTerm, setSearchTerm] = useState("");

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const filteredRecipes = useMemo(()=>{
        if(!debouncedSearchTerm.trim()) return mockRecipes;

        return mockRecipes.filter((recipe:Recipe)=>{
            return recipe.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
        })
    },[debouncedSearchTerm]);


  return (
    <>
    <SearchBar onSearch={setSearchTerm} />
      <div className="grid grid-cols-3 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {filteredRecipes.map((recipe:Recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>

    </>
  );
}
