import {
  CardHeader,
  CardBody,
  CardFooter,
} from "@components/shared/ui-elements/card";
// import { CardBody } from "@components/shared/ui-elements/card/card-body";
// import { CardFooter } from "@components/shared/ui-elements/card/card-footer";

export function RecipeCard({ recipe }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-500 w-72 h-64 p-4">
        <CardHeader title={recipe.title}/>
        <CardBody description={recipe.description}/>
        <CardFooter prepTime={recipe.prepTime} cookTime={recipe.cookTime} servings={recipe.servings}/>
      </div>
    </>
  );
}
