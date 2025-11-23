export interface CardHeaderProps {
  title: string;
  needHeaderButtons: boolean;
  headerButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  headerButtonText: string;
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
