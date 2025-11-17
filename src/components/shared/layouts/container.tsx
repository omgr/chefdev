import { RecipeCollection } from "@pages/recipe-collection";
import { Recipes } from "@pages/recipes";
import { RecipeDetail } from "@pages/recipe-detail";
import { Routes, Route, Navigate } from "react-router-dom";

export function Container() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Navigate to="/recipes" replace />} />
        <Route path="/recipes" element={<Recipes />}>
          <Route index element={<Navigate to="view-all" replace />} />
          <Route path="view-all" element={<RecipeCollection />} />
          <Route path="view-detail/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
