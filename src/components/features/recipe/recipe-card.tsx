import {
  CardHeader,
  CardBody,
  CardFooter,
} from "@components/shared/ui-elements/card";
import type { RecipeCardProps } from "@chefdev-types/recipe/recipe-types";
import { useNavigate } from "react-router-dom";

export function RecipeCard({ recipe }: RecipeCardProps) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/recipes/view-detail/${recipe.id}`);
    };
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-500 w-72 h-64 p-4 cursor-pointer" onClick={handleClick}>
        <CardHeader title={recipe.title} />
        <CardBody description={recipe.description} />
        <CardFooter
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
          servings={recipe.servings}
          difficulty={recipe.difficulty}
        />
      </div>
    </>
  );
}
