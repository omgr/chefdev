import { Outlet } from "react-router-dom";

export function Recipes() {
  return (
    <div>
      <h3>Welcome to my recipes...!</h3>
      <Outlet />

    </div>
  );
}
