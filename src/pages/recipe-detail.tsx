import { useParams, Link } from "react-router-dom";
import { getRecipeById } from "@services/recipeService";
import { useMemo } from "react";
import type { Recipe } from "@chefdev-types/recipe/recipe-types";
import { Instructions } from "@components/features/recipe/instructions";
import { Ingredients } from "@components/features/recipe/ingredients";
import { RecipeInfo } from "@components/features/recipe/recipe-info";

export function RecipeDetail() {
  const { id } = useParams();
  const recipe: Recipe | undefined = getRecipeById(id || "");
  const totalTime: number = useMemo(() => {
    if (!recipe) return 0;
    const total: number = recipe.instructions.reduce((acc, currentIns) => {
      return acc + (currentIns.time || 0);
    }, 0);
    return total;
  }, [recipe]);

  return (
    <>
      <div>
        <div className="w-full flex justify-between items-center my-4 border-b">
          {/* -- Header section -- */}
          <Link to="/recipes/view-all">
            {/* <ArrowLeftIcon className="w-6 h-6" /> */}
            Back to collection
          </Link>
          <h5 className="text-2xl font-bold">{recipe?.title}</h5>
          <button type="button">
            {/* <PencilIcon className="w-6 h-6" /> */}
            Edit
          </button>
        </div>
        <div className="my-4">
          {/* -- Recipe details -- */}
          {recipe ? (
            <div className="grid grid-cols-1 w-full gap-3">
              {/* -- Recipe Information -- */}
              <RecipeInfo
                title={recipe.title}
                description={recipe.description}
                difficulty={recipe.difficulty}
                imageUrl={recipe.imageUrl}
                prepTime={recipe.prepTime}
                cookTime={recipe.cookTime}
                totalTime={totalTime}
                servings={recipe.servings}
              />

              {/* -- Recipe Ingredients & Instructions -- */}
              <div className="grid grid-cols-2 gap-3 w-full divide-x border-t">
                <div className="grid grid-cols-1 w-full gap-4 pr-5">
                  {/* -- Ingredients -- */}
                  <Ingredients ingredients={recipe.ingredients} />
                </div>
                <div className="grid grid-cols-1 w-full gap-3 pl-5">
                  {/* -- Instructions -- */}
                  <Instructions instructions={recipe.instructions} />
                </div>
              </div>
            </div>
          ) : (
            <div>Recipe not found</div>
          )}
        </div>
      </div>
    </>
  );
}
