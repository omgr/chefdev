import { useEffect } from "react";
import "./App.css";
import { MainLayout } from "@components/shared/layouts/main-layout";
import { initializeRecipes } from "@services/recipeService";
import { mockRecipes } from "@data/mockRecipes";

function App() {
  useEffect(() => {
    initializeRecipes(mockRecipes);
  }, []);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
