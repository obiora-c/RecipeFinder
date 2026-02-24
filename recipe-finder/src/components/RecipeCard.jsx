function RecipeCard({ recipe, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-t w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">
          {recipe.strMeal}
        </h2>
        <p className="text-sm text-gray-600">
          Category: {recipe.strCategory}
        </p>
        <p className="text-sm text-gray-600">
          Cuisine: {recipe.strArea}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;