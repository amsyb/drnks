// import "./RecipeCard.scss";

// function RecipeCard({ recipe }) {
//   const tags = recipe.description.split(" ");

//   return (
//     <div className="card">
//       <img className="card_img" src={recipe.image} alt={recipe.title} />
//       <h4 className="card_title">{recipe.title}</h4>
//       <div className="card_desc">
//         {tags.map((tag, index) => (
//           <p key={index}>{tag}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RecipeCard;

import "./RecipeCard.scss";

function RecipeCard({ recipe, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card_img" src={recipe.image} alt={recipe.title} />
      <h4 className="card_title">{recipe.title}</h4>
      <div className="card_desc">
        {recipe.mainIngredients.map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;
