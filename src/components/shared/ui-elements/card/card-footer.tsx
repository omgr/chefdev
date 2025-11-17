import type { CardFooterProps } from "@/types/card/card-types";

export function CardFooter({
  prepTime,
  cookTime,
  servings,
  difficulty,
}: CardFooterProps) {
  const totalTime = prepTime + cookTime;
  return (
    <>
      <div className="justify-between h-15 mt-3">
        <ul className="list-none flex flex-row gap-2">
          <li>{"Total time: " + totalTime}</li>
          <li>{"Servings: " + servings}</li>
          {difficulty && <li>{"Difficulty: " + difficulty}</li>}
        </ul>
      </div>
    </>
  );
}
