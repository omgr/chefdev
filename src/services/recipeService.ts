import type { Recipe } from "@chefdev-types/recipe/recipe-types";

const STORAGE_KEY = "chefdev-recipes";

/**
 * Get all recipes from localStorage
 * Falls back to empty array if no data exists
 */
export const getAllRecipes = (): Recipe[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    // console.log("getAllRecipes",data);
    if (!data) return [];
    return JSON.parse(data) as Recipe[];
  } catch (error) {
    console.error("Error reading recipes from localStorage:", error);
    return [];
  }
};

/**
 * Get a single recipe by ID
 * Returns undefined if not found
 */
export const getRecipeById = (id: string): Recipe | undefined => {
  const recipes = getAllRecipes();
  return recipes.find((recipe) => recipe.id === id);
};

/**
 * Create a new recipe
 * Generates ID and timestamps automatically
 */
export const createRecipe = (
  recipeData: Omit<Recipe, "id" | "createdAt" | "updatedAt">,
): Recipe => {
  const newRecipe: Recipe = {
    ...recipeData,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const recipes = getAllRecipes();
  recipes.push(newRecipe);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    return newRecipe;
  } catch (error) {
    console.error("Error saving recipe to localStorage:", error);
    throw new Error("Failed to save recipe");
  }
};

/**
 * Update an existing recipe
 * Returns updated recipe or undefined if not found
 */
export const updateRecipe = (
  id: string,
  recipeData: Omit<Recipe, "id" | "createdAt" | "updatedAt">,
): Recipe | undefined => {
  const recipes = getAllRecipes();
  const index = recipes.findIndex((recipe) => recipe.id === id);

  if (index === -1) {
    return undefined;
  }

  const updatedRecipe: Recipe = {
    ...recipeData,
    id,
    createdAt: recipes[index].createdAt, // Preserve original creation date
    updatedAt: new Date().toISOString(),
  };

  recipes[index] = updatedRecipe;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    return updatedRecipe;
  } catch (error) {
    console.error("Error updating recipe in localStorage:", error);
    throw new Error("Failed to update recipe");
  }
};

/**
 * Delete a recipe by ID
 * Returns true if deleted, false if not found
 */
export const deleteRecipe = (id: string): Recipe[] => {
  const recipes = getAllRecipes();
  const filteredRecipes = recipes.filter((recipe) => recipe.id !== id);

  if (filteredRecipes.length === recipes.length) {
    return recipes; // Recipe not found
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRecipes));
    return filteredRecipes;
  } catch (error) {
    console.error("Error deleting recipe from localStorage:", error);
    throw new Error("Failed to delete recipe");
  }
};

/**
 * Initialize localStorage with mock data
 * Only runs if localStorage is empty
 */
export const initializeRecipes = (mockRecipes: Recipe[]): void => {
  const existing = getAllRecipes();
  if (existing.length === 0) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockRecipes));
    } catch (error) {
      console.error("Error initializing recipes:", error);
    }
  }
};
