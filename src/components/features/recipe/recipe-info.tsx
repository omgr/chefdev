import type { RecipeInfoProps } from "@chefdev-types/recipe/recipe-types";

export function RecipeInfo({
  title,
  description,
  difficulty,
  imageUrl,
  prepTime,
  cookTime,
  servings,
  totalTime,
}: RecipeInfoProps) {
  return (
    <>
      {imageUrl && (
        <div className="w-full h-64 mb-4 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <p className="border-t py-3">{description}</p>

      <div className="flex justify-between items-center border-t">
        <div className="grid grid-cols-1 w-full gap-3">
          {/* -- Time section -- */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Total Time</span>
            <span className="text-sm text-gray-500">{totalTime} minutes</span>
          </div>
          <div className="grid grid-cols-2 gap-2 divide-x">
            <div className="flex justify-between items-center px-2">
              <span className="text-sm text-gray-500">Prep Time</span>
              <span className="text-sm text-gray-500">{prepTime} minutes</span>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-sm text-gray-500">Cook Time</span>
              <span className="text-sm text-gray-500">{cookTime} minutes</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 w-full gap-3">
          {/* -- Serviings Section -- */}
          <span className="text-sm text-gray-500">Servings</span>
          <span className="text-sm text-gray-500">{servings}</span>
        </div>
        <div className="grid grid-cols-1 w-full gap-3">
          {/* -- Difficulty Section -- */}
          <span className="text-sm text-gray-500">Difficulty</span>
          <span className="text-sm text-gray-500">{difficulty}</span>
        </div>
      </div>
    </>
  );
}
