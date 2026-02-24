function RecipeDetails({ recipe, onBack }) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  const youtubeEmbed =
    recipe.strYoutube &&
    recipe.strYoutube.replace("watch?v=", "embed/");

  return (
    <div className="bg-white rounded shadow p-6 max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Back to Results
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {recipe.strMeal}
      </h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full rounded mb-4"
      />

      <h3 className="text-xl font-semibold mb-2">
        Ingredients
      </h3>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        Instructions
      </h3>
      <p className="mb-4 whitespace-pre-line">
        {recipe.strInstructions}
      </p>

      {youtubeEmbed && (
        <>
          <h3 className="text-xl font-semibold mb-2">
            Video Tutorial
          </h3>
          <iframe
            className="w-full h-64 mb-4"
            src={youtubeEmbed}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </>
      )}

      {recipe.strSource && (
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Full Recipe Source
        </a>
      )}
    </div>
  );
}

export default RecipeDetails;