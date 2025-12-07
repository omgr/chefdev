// import { describe } from "vitest";
import { getAllRecipes, getRecipeById } from "../recipeService";

describe("Recipe Service Tests", () => {
  test("getAllRecipes should return an empty array if no recipes are stored", () => {
    const result = getAllRecipes();
    expect(result).toEqual([]);
  });

  test("getRecipeById should return undefined if the recipe is not found", () => {
    const result = getRecipeById("non-existent-id");
    expect(result).toBeUndefined();
  });
});
