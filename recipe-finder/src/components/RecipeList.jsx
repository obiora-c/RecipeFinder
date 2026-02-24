import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onSelectRecipe }) {
  if (!recipes.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onClick={() => onSelectRecipe(recipe)}
        />
      ))}
    </div>
  );
}

export default RecipeList;