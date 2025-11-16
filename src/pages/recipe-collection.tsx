import { RecipeCard } from "@components/features/recipe/recipe-card";
import { mockRecipes } from "@data/mockRecipes";

export function RecipeCollection() {
  return (
    <div>
      <h3>Testing this is Recipe collection page</h3>
      <div className="grid grid-cols-3 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {mockRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
