export interface CardHeaderProps {
  title: string;
}

export interface CardBodyProps {
  description: string;
}

export interface CardFooterProps {
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty?: string;
}
