import { useState } from "react";
import { recipes } from "../../data/recipeData";
import RecipeCard from "../../components/RecipeCard";
import RecipeOverlay from "../../components/RecipeOverlay/RecipeOverlay";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import "./Homepage.scss";

function Homepage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    baseSpirit: "All",
    method: "All",
  });

  // Apply both search and filters
  const filteredRecipes = recipes.filter((recipe) => {
    // Search filter
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      recipe.title.toLowerCase().includes(query) ||
      recipe.mainIngredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query)
      );

    // Base spirit filter
    const matchesSpirit =
      filters.baseSpirit === "All" || recipe.baseSpirit === filters.baseSpirit;

    // Method filter
    const matchesMethod =
      filters.method === "All" || recipe.method === filters.method;

    return matchesSearch && matchesSpirit && matchesMethod;
  });

  return (
    <div className="homepage">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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
