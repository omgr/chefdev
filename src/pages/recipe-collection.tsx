import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { RecipeCard } from "@components/features/recipe/recipe-card";
import { SearchBar } from "@components/shared/ui-elements/filters/search-bar";
import { ChefDevPrompt } from "@components/shared/ui-elements/prompt/chef-dev-prompt";

import { getAllRecipes, deleteRecipe } from "@services/recipeService";
import type { Recipe } from "@chefdev-types/recipe/recipe-types";
import { useDebounce } from "@hooks/filter-hooks";

export function RecipeCollection() {
  const [searchTerm, setSearchTerm] = useState("");
  // setRecipes will be used for CRUD operations (delete, add, edit)
  const [recipes, setRecipes] = useState<Recipe[]>(() => getAllRecipes());
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogId, setDialogId] = useState("");
  const DIALOG_DESCRIPTION = "Are you sure you want to delete it?";

  const navigate = useNavigate();

  const handleNewRecipe = () => {
    navigate("/recipes/new", {
      replace: true,
    });
  };

  const setDialogValues = useCallback(
    (id: string, title: string, open: boolean) => {
      setDialogTitle(`Deleting - ${title}...?`);
      setDialogId(id);
      setOpenDialog(open);
    },
    []
  );

  const handleOpenDialog = useCallback(
    (id: string, title: string) => {
      setDialogValues(id, title, true);
    },
    [setDialogValues]
  );

  const handleCloseDialog = useCallback(() => {
    setDialogValues("", "", false);
  }, [setDialogValues]);

  const handleConfirmDialog = useCallback(() => {
    setRecipes(deleteRecipe(dialogId));
    setDialogValues("", "", false);
  }, [dialogId, setDialogValues]);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredRecipes = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return recipes;

    return recipes.filter((recipe: Recipe) => {
      return recipe.title
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
    });
  }, [debouncedSearchTerm, recipes]);

  return (
    <>
      <div className="flex justify-between items-center gap-3">
        <SearchBar onSearch={setSearchTerm} />
        <button onClick={handleNewRecipe}>New Recipe</button>
      </div>
      <div className="grid grid-cols-3 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {filteredRecipes.map((recipe: Recipe) => (
          <RecipeCard
            recipe={recipe}
            key={recipe.id}
            handleOpenDialog={handleOpenDialog}
          />
        ))}
      </div>
      <ChefDevPrompt
        title={dialogTitle}
        description={DIALOG_DESCRIPTION}
        open={openDialog}
        closeDialog={handleCloseDialog}
        confirmDialog={handleConfirmDialog}
      />
    </>
  );
}
