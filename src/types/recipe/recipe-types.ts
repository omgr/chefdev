export interface Ingredient {
  quantity: number | null;
  unit: string;
  name: string;
  note?: string;
}

export interface Instruction {
  step: number;
  text: string;
  time?: number; // minutes
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Dessert" | "Snack";
  difficulty: "Easy" | "Medium" | "Hard";
  cuisineType: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags: string[];
  imageUrl: string | null;
  createdAt: string; // ISO string for .NET compatibility
  updatedAt: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
}
