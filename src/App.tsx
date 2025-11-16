import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecipeCollection } from "@pages/recipe-collection";
import { MainLayout } from "@components/shared/layouts/main";

function App() {

  return (
    <>
      <div>
        <MainLayout>
          <RecipeCollection />
        </MainLayout>
        
      </div>

    </>
  );
}

export default App;
