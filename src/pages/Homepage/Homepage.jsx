import { recipes } from "../../data/recipeData";
import RecipeCard from "../../components/RecipeCard";
import "./Homepage.scss";
function Homepage() {
  return (
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Homepage;
