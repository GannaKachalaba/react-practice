import { RecipeList } from "./RecipeList";
import recipes from "../components/recipes.json";

export const App = () => {
  return (
    <div>
      <RecipeList items={recipes} />
    </div>
  );
};
