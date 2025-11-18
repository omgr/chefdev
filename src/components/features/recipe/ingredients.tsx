import type {
  Ingredient,
  IngredientsProps,
} from "@chefdev-types/recipe/recipe-types";

export function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <>
      <h6 className="text-xl font-bold">Ingredients</h6>
      <ul className="list-disc list-outside">
        {ingredients.map((ingredient: Ingredient, idx: number) => {
          return (
            <li key={idx}>
              <div className="flex justify-between items-center">
                <span className="w-1/2 text-left">{ingredient.name}</span>
                <span className="w-1/4">
                  {ingredient.quantity && "Quantity:" + ingredient.quantity}
                </span>
                <span className="w-1/4">
                  {ingredient.unit !== "" && "Unit:" + ingredient.unit}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
