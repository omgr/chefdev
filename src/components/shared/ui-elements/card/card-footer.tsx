export function CardFooter({ prepTime, cookTime, servings }) {
  return (
    <>
      <div className="justify-between h-15 mt-3">
        <ul className="list-none flex flex-row gap-2">
          <li>{"Preping: " + prepTime}</li>
          <li>{"Cooking: " + cookTime}</li>
          <li>{"Servings: " + servings}</li>
        </ul>
      </div>
    </>
  );
}
