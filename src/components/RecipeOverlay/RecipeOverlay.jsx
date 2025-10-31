import { useState } from "react";
import "./RecipeOverlay.scss";

function RecipeOverlay({ recipe, onClose }) {
  const [openSections, setOpenSections] = useState({
    recipe: true,
    steps: false,
    history: false,
    allergens: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay__content" onClick={(e) => e.stopPropagation()}>
        <button className="overlay__close" onClick={onClose}>
          ×
        </button>

        <img className="overlay__image" src={recipe.image} alt={recipe.title} />
        <h2 className="overlay__title">{recipe.title}</h2>

        <div className="overlay__dropdown">
          <button
            className="overlay__dropdown-header"
            onClick={() => toggleSection("recipe")}
          >
            <span>Recipe</span>
            <span
              className={`overlay__arrow ${openSections.recipe ? "open" : ""}`}
            >
              ▼
            </span>
          </button>
          {openSections.recipe && (
            <div className="overlay__dropdown-content">
              <h4>Ingredients</h4>
              <ul>
                {recipe.recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Glassware</h4>
              <p>{recipe.recipe.glassware}</p>
              <h4>Ice</h4>
              <p>{recipe.recipe.ice}</p>
            </div>
          )}
        </div>

        <div className="overlay__dropdown">
          <button
            className="overlay__dropdown-header"
            onClick={() => toggleSection("steps")}
          >
            <span>Steps</span>
            <span
              className={`overlay__arrow ${openSections.steps ? "open" : ""}`}
            >
              ▼
            </span>
          </button>
          {openSections.steps && (
            <div className="overlay__dropdown-content">
              <ol>
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="overlay__dropdown">
          <button
            className="overlay__dropdown-header"
            onClick={() => toggleSection("history")}
          >
            <span>History</span>
            <span
              className={`overlay__arrow ${openSections.history ? "open" : ""}`}
            >
              ▼
            </span>
          </button>
          {openSections.history && (
            <div className="overlay__dropdown-content">
              <p>{recipe.history}</p>
            </div>
          )}
        </div>

        <div className="overlay__dropdown">
          <button
            className="overlay__dropdown-header"
            onClick={() => toggleSection("allergens")}
          >
            <span>Allergens</span>
            <span
              className={`overlay__arrow ${
                openSections.allergens ? "open" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {openSections.allergens && (
            <div className="overlay__dropdown-content">
              <ul>
                {recipe.allergens.map((allergen, index) => (
                  <li key={index}>{allergen}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeOverlay;
