export interface ChefDevPromptProps {
  title: string;
  description: string;
  open: boolean;
  closeDialog: () => void;
  confirmDialog: () => void;
}
