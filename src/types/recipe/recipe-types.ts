export interface Ingredient {
  quantity: number | null;
  unit: string;
  name: string;
  note?: string;
}

export interface IngredientsProps {
  ingredients: Ingredient[];
}

export interface Instruction {
  step: number;
  text: string;
  time?: number; // minutes
}

export interface InstructionsProps {
  instructions: Instruction[];
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
  imageUrl: string | undefined;
  createdAt: string; // ISO string for .NET compatibility
  updatedAt: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export interface RecipeInfoProps {
  title: Recipe["title"];
  description: Recipe["description"];
  difficulty: Recipe["difficulty"];
  imageUrl: Recipe["imageUrl"];
  prepTime: Recipe["prepTime"];
  cookTime: Recipe["cookTime"];
  servings: Recipe["servings"];
  totalTime: number;
}
