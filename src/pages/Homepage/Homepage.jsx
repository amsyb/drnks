import { useState } from "react";
import { recipes } from "../../data/recipeData";
import RecipeCard from "../../components/RecipeCard";
import RecipeOverlay from "../../components/RecipeOverlay/RecipeOverlay";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import "./Homepage.scss";
import logo from "../../assets/icons/lilt.svg";

function Homepage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    baseSpirit: "All",
    method: "All",
  });

  const filteredRecipes = recipes.filter((recipe) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      recipe.title.toLowerCase().includes(query) ||
      recipe.mainIngredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query)
      );

    const matchesSpirit =
      filters.baseSpirit === "All" || recipe.baseSpirit === filters.baseSpirit;

    const matchesMethod =
      filters.method === "All" || recipe.method === filters.method;

    return matchesSearch && matchesSpirit && matchesMethod;
  });

  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__title">
          <img src={logo} alt="Lilt Logo" className="homepage__logo" />
          <h1 className="homepage__heading">Lilt</h1>
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="recipe-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => setSelectedRecipe(recipe)}
            />
          ))
        ) : (
          <p className="no-results">
            No recipes found. Try adjusting your search or filters!
          </p>
        )}
      </div>

      {selectedRecipe && (
        <RecipeOverlay
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default Homepage;
