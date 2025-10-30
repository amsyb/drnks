const RecipeCard = ({ title, description, image }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      style={{ width: "330px", height: "387px" }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "330px", height: "387px" }}
        className="object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default RecipeCard;
