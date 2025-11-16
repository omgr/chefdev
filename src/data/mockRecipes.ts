// Mock Recipe Data - Structure matches .NET API DTOs
// This data will be replaced with API calls later

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
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert' | 'Snack';
  difficulty: 'Easy' | 'Medium' | 'Hard';
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

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Fluffy Buttermilk Pancakes',
    description: 'Light, fluffy pancakes perfect for a weekend breakfast. The buttermilk makes them extra tender and delicious.',
    category: 'Breakfast',
    difficulty: 'Easy',
    cuisineType: 'American',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { quantity: 2, unit: 'cups', name: 'all-purpose flour' },
      { quantity: 2, unit: 'tbsp', name: 'sugar' },
      { quantity: 2, unit: 'tsp', name: 'baking powder' },
      { quantity: 0.5, unit: 'tsp', name: 'baking soda' },
      { quantity: 0.5, unit: 'tsp', name: 'salt' },
      { quantity: 2, unit: 'cups', name: 'buttermilk' },
      { quantity: 2, unit: '', name: 'large eggs' },
      { quantity: 0.25, unit: 'cup', name: 'melted butter' },
      { quantity: 1, unit: 'tsp', name: 'vanilla extract' },
    ],
    instructions: [
      { step: 1, text: 'In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt', time: 2 },
      { step: 2, text: 'In another bowl, whisk buttermilk, eggs, melted butter, and vanilla', time: 2 },
      { step: 3, text: 'Pour wet ingredients into dry ingredients and mix until just combined (lumps are okay!)', time: 3 },
      { step: 4, text: 'Heat a griddle or large pan over medium heat (about 375°F) and lightly grease', time: 2 },
      { step: 5, text: 'Pour 1/4 cup batter for each pancake onto the hot griddle', time: 1 },
      { step: 6, text: 'Cook until bubbles form on surface and edges look dry, then flip and cook until golden brown', time: 5 },
      { step: 7, text: 'Serve immediately with maple syrup and butter', time: 0 },
    ],
    tags: ['breakfast', 'easy', 'quick', 'family-friendly', 'vegetarian'],
    imageUrl: null,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Classic Spaghetti Carbonara',
    description: 'Authentic Italian pasta dish with eggs, cheese, and pancetta. Creamy without using cream!',
    category: 'Dinner',
    difficulty: 'Medium',
    cuisineType: 'Italian',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { quantity: 1, unit: 'lb', name: 'spaghetti' },
      { quantity: 6, unit: '', name: 'large eggs' },
      { quantity: 1, unit: 'cup', name: 'grated Parmesan cheese' },
      { quantity: 8, unit: 'oz', name: 'pancetta or bacon, diced' },
      { quantity: 4, unit: '', name: 'garlic cloves, minced' },
      { quantity: null, unit: '', name: 'salt', note: 'to taste' },
      { quantity: null, unit: '', name: 'black pepper', note: 'to taste' },
      { quantity: 2, unit: 'tbsp', name: 'fresh parsley, chopped' },
    ],
    instructions: [
      { step: 1, text: 'Bring large pot of salted water to boil for pasta', time: 5 },
      { step: 2, text: 'In a bowl, whisk together eggs and Parmesan cheese', time: 2 },
      { step: 3, text: 'Cook pancetta in large skillet over medium heat until crispy', time: 8 },
      { step: 4, text: 'Add garlic to pancetta and cook for 1 minute', time: 1 },
      { step: 5, text: 'Cook spaghetti according to package directions, reserve 1 cup pasta water', time: 10 },
      { step: 6, text: 'Remove pan from heat, add drained pasta to pancetta', time: 1 },
      { step: 7, text: 'Quickly stir in egg mixture, adding pasta water to create creamy sauce', time: 2 },
      { step: 8, text: 'Season with salt and pepper, garnish with parsley', time: 1 },
    ],
    tags: ['dinner', 'italian', 'pasta', 'medium'],
    imageUrl: null,
    createdAt: '2024-01-16T14:30:00Z',
    updatedAt: '2024-01-16T14:30:00Z',
  },
  {
    id: '3',
    title: 'Chocolate Chip Cookies',
    description: 'Classic chewy chocolate chip cookies that everyone loves. Perfect for dessert or afternoon snack.',
    category: 'Dessert',
    difficulty: 'Easy',
    cuisineType: 'American',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    ingredients: [
      { quantity: 2.25, unit: 'cups', name: 'all-purpose flour' },
      { quantity: 1, unit: 'tsp', name: 'baking soda' },
      { quantity: 1, unit: 'tsp', name: 'salt' },
      { quantity: 1, unit: 'cup', name: 'butter, softened' },
      { quantity: 0.75, unit: 'cup', name: 'granulated sugar' },
      { quantity: 0.75, unit: 'cup', name: 'brown sugar, packed' },
      { quantity: 2, unit: '', name: 'large eggs' },
      { quantity: 2, unit: 'tsp', name: 'vanilla extract' },
      { quantity: 2, unit: 'cups', name: 'chocolate chips' },
    ],
    instructions: [
      { step: 1, text: 'Preheat oven to 375°F (190°C)', time: 5 },
      { step: 2, text: 'Mix flour, baking soda, and salt in a bowl', time: 2 },
      { step: 3, text: 'Beat butter and sugars until creamy', time: 3 },
      { step: 4, text: 'Add eggs and vanilla, beat well', time: 2 },
      { step: 5, text: 'Gradually mix in flour mixture', time: 3 },
      { step: 6, text: 'Stir in chocolate chips', time: 1 },
      { step: 7, text: 'Drop rounded tablespoons of dough onto ungreased cookie sheets', time: 5 },
      { step: 8, text: 'Bake 9-11 minutes until golden brown', time: 11 },
      { step: 9, text: 'Cool on baking sheets for 2 minutes, then transfer to wire rack', time: 2 },
    ],
    tags: ['dessert', 'cookies', 'chocolate', 'easy', 'baking'],
    imageUrl: null,
    createdAt: '2024-01-17T16:00:00Z',
    updatedAt: '2024-01-17T16:00:00Z',
  },
  {
    id: '4',
    title: 'Greek Salad',
    description: 'Fresh and healthy Mediterranean salad with crisp vegetables, feta, and olives.',
    category: 'Lunch',
    difficulty: 'Easy',
    cuisineType: 'Greek',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    ingredients: [
      { quantity: 1, unit: '', name: 'large cucumber, diced' },
      { quantity: 4, unit: '', name: 'large tomatoes, cut into wedges' },
      { quantity: 1, unit: '', name: 'red onion, thinly sliced' },
      { quantity: 1, unit: '', name: 'green bell pepper, diced' },
      { quantity: 1, unit: 'cup', name: 'Kalamata olives' },
      { quantity: 8, unit: 'oz', name: 'feta cheese, cubed' },
      { quantity: 0.33, unit: 'cup', name: 'extra virgin olive oil' },
      { quantity: 2, unit: 'tbsp', name: 'red wine vinegar' },
      { quantity: 1, unit: 'tsp', name: 'dried oregano' },
      { quantity: null, unit: '', name: 'salt and pepper', note: 'to taste' },
    ],
    instructions: [
      { step: 1, text: 'Combine cucumber, tomatoes, onion, and bell pepper in large bowl', time: 5 },
      { step: 2, text: 'Add olives and feta cheese', time: 2 },
      { step: 3, text: 'In small bowl, whisk together olive oil, vinegar, and oregano', time: 2 },
      { step: 4, text: 'Pour dressing over salad and toss gently', time: 1 },
      { step: 5, text: 'Season with salt and pepper', time: 1 },
      { step: 6, text: 'Let sit for 10 minutes before serving for flavors to meld', time: 10 },
    ],
    tags: ['lunch', 'salad', 'greek', 'healthy', 'vegetarian', 'quick'],
    imageUrl: null,
    createdAt: '2024-01-18T12:00:00Z',
    updatedAt: '2024-01-18T12:00:00Z',
  },
  {
    id: '5',
    title: 'Chicken Stir-Fry',
    description: 'Quick and flavorful Asian-inspired stir-fry with tender chicken and crisp vegetables.',
    category: 'Dinner',
    difficulty: 'Easy',
    cuisineType: 'Chinese',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { quantity: 1.5, unit: 'lb', name: 'chicken breast, sliced thin' },
      { quantity: 2, unit: 'tbsp', name: 'vegetable oil' },
      { quantity: 2, unit: '', name: 'bell peppers, sliced' },
      { quantity: 1, unit: '', name: 'onion, sliced' },
      { quantity: 2, unit: 'cups', name: 'broccoli florets' },
      { quantity: 3, unit: '', name: 'garlic cloves, minced' },
      { quantity: 1, unit: 'tbsp', name: 'fresh ginger, minced' },
      { quantity: 3, unit: 'tbsp', name: 'soy sauce' },
      { quantity: 2, unit: 'tbsp', name: 'oyster sauce' },
      { quantity: 1, unit: 'tbsp', name: 'cornstarch' },
      { quantity: 0.25, unit: 'cup', name: 'chicken broth' },
      { quantity: 1, unit: 'tsp', name: 'sesame oil' },
    ],
    instructions: [
      { step: 1, text: 'Mix cornstarch with chicken broth in small bowl, set aside', time: 1 },
      { step: 2, text: 'Heat 1 tbsp oil in wok or large skillet over high heat', time: 2 },
      { step: 3, text: 'Cook chicken until no longer pink, remove and set aside', time: 5 },
      { step: 4, text: 'Add remaining oil, cook vegetables until tender-crisp', time: 5 },
      { step: 5, text: 'Add garlic and ginger, cook for 30 seconds', time: 1 },
      { step: 6, text: 'Return chicken to pan, add soy sauce and oyster sauce', time: 1 },
      { step: 7, text: 'Stir in cornstarch mixture, cook until sauce thickens', time: 2 },
      { step: 8, text: 'Drizzle with sesame oil, serve over rice', time: 1 },
    ],
    tags: ['dinner', 'chinese', 'stir-fry', 'quick', 'healthy'],
    imageUrl: null,
    createdAt: '2024-01-19T18:30:00Z',
    updatedAt: '2024-01-19T18:30:00Z',
  },
  {
    id: '6',
    title: 'Banana Bread',
    description: 'Moist and delicious banana bread, perfect for using up overripe bananas.',
    category: 'Snack',
    difficulty: 'Easy',
    cuisineType: 'American',
    prepTime: 15,
    cookTime: 60,
    servings: 12,
    ingredients: [
      { quantity: 3, unit: '', name: 'ripe bananas, mashed' },
      { quantity: 0.75, unit: 'cup', name: 'sugar' },
      { quantity: 1, unit: '', name: 'large egg' },
      { quantity: 0.33, unit: 'cup', name: 'melted butter' },
      { quantity: 1, unit: 'tsp', name: 'vanilla extract' },
      { quantity: 1, unit: 'tsp', name: 'baking soda' },
      { quantity: 0.25, unit: 'tsp', name: 'salt' },
      { quantity: 1.5, unit: 'cups', name: 'all-purpose flour' },
      { quantity: 0.5, unit: 'cup', name: 'walnuts, chopped', note: 'optional' },
    ],
    instructions: [
      { step: 1, text: 'Preheat oven to 350°F (175°C). Grease 9x5 loaf pan', time: 5 },
      { step: 2, text: 'Mash bananas in mixing bowl', time: 2 },
      { step: 3, text: 'Mix in melted butter, sugar, egg, and vanilla', time: 3 },
      { step: 4, text: 'Sprinkle baking soda and salt over mixture, stir in', time: 1 },
      { step: 5, text: 'Add flour, mix until just incorporated (don\'t overmix)', time: 2 },
      { step: 6, text: 'Fold in walnuts if using', time: 1 },
      { step: 7, text: 'Pour into prepared loaf pan', time: 1 },
      { step: 8, text: 'Bake for 60 minutes until toothpick comes out clean', time: 60 },
      { step: 9, text: 'Cool in pan for 10 minutes, then turn out onto wire rack', time: 10 },
    ],
    tags: ['snack', 'baking', 'banana', 'easy', 'breakfast'],
    imageUrl: null,
    createdAt: '2024-01-20T09:00:00Z',
    updatedAt: '2024-01-20T09:00:00Z',
  },
];

// Helper function to seed localStorage if empty
export function initializeMockData() {
  const existing = localStorage.getItem('chefdev_recipes');
  if (!existing) {
    localStorage.setItem('chefdev_recipes', JSON.stringify(mockRecipes));
    console.log('✅ Initialized with', mockRecipes.length, 'sample recipes');
  }
}

