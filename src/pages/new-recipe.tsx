import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChefDevDropdown,
  ChefDevField,
} from "@components/shared/ui-elements/form-controls";
import type { ChefDevDropdownOption } from "@chefdev-types/form-control/form-control-types";
import type { Recipe } from "@chefdev-types/recipe/recipe-types";
import { createRecipe } from "@/services/recipeService";
export function NewRecipe() {
  const defaultOption: ChefDevDropdownOption<string> = {
    value: "" as string,
    label: "Select an option",
  };

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [category, setCategory] = useState(defaultOption);
  const [difficulty, setDifficulty] = useState(defaultOption);
  const [description, setDescription] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  const [servings, setServings] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  console.log(
    "redered new recipe page",
    name,
    cuisine,
    category,
    difficulty,
    description,
    prepTime,
    cookTime,
    servings,
    ingredients,
    instructions
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const newRecipe: Recipe = {
      id: "",
      title: name,
      cuisineType: cuisine,
      category: category.value as
        | "Breakfast"
        | "Lunch"
        | "Dinner"
        | "Dessert"
        | "Snack",
      difficulty: difficulty.value as "Easy" | "Medium" | "Hard",
      description,
      prepTime,
      cookTime,
      servings,
      ingredients: [],
      instructions: [],
      tags: [],
      imageUrl: undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const createdRecipe = createRecipe(newRecipe);
    console.log("createdRecipe", createdRecipe);
    navigate(`/recipes/view-detail/${createdRecipe.id}`, { replace: true });
  };

  const handleCancel = useCallback(() => {
    navigate("/recipes/view-all", { replace: true });
  }, [navigate]);

  const categoryOptions = [
    defaultOption,
    { value: "Breakfast" as const, label: "Breakfast" },
    { value: "Lunch" as const, label: "Lunch" },
    { value: "Dinner" as const, label: "Dinner" },
    { value: "Dessert" as const, label: "Dessert" },
    { value: "Snack" as const, label: "Snack" },
  ];
  const difficultyOptions = [
    defaultOption,
    { value: "Easy" as const, label: "Easy" },
    { value: "Medium" as const, label: "Medium" },
    { value: "Hard" as const, label: "Hard" },
  ];
  return (
    <>
      <div>
        <h3>Add your new recipe here</h3>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          {/* <input type="text" placeholder="Recipe Name" /> */}
          <div className="grid grid-cols-2 gap-4">
            <ChefDevField
              label="Recipe Name"
              type="text"
              placeholder="eg., Fluffy Pancakes..."
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ChefDevField
              label="Cuisine"
              type="text"
              placeholder="eg., Indian, Italian, etc..."
              required
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ChefDevDropdown
              label="Category"
              options={categoryOptions}
              value={category}
              onChange={setCategory}
            />
            <ChefDevDropdown
              label="Difficulty"
              options={difficultyOptions}
              value={difficulty}
              onChange={setDifficulty}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <textarea
              placeholder="Recipe Description"
              className="w-full p-1"
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ChefDevField
              label="Prep Time"
              type="number"
              placeholder="eg., 10"
              required
              value={prepTime}
              onChange={(e) => setPrepTime(parseInt(e.target.value))}
            />
            <ChefDevField
              label="Cook Time"
              type="number"
              placeholder="eg., 20"
              required
              value={cookTime}
              onChange={(e) => setCookTime(parseInt(e.target.value))}
            />
            <ChefDevField
              label="Servings"
              type="number"
              placeholder="eg., 4"
              required
              value={servings}
              onChange={(e) => setServings(parseInt(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <textarea
              placeholder="Recipe Ingredients"
              className="w-full p-1"
              rows={8}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea
              placeholder="Recipe Instructions"
              className="w-full p-1"
              rows={8}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="bg-green-600 text-white">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
