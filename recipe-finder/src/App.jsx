import { useState } from "react";
import SearchBar from "./components/SearchBar"
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import './index.css';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (query) => {
    try {
      setLoading(true);
      setError(null);
      setSelectedRecipe(null);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      if (!data.meals) {
        setRecipes([]);
        setError("No recipes found.");
      } else {
        setRecipes(data.meals);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🍽️ Recipe Finder
      </h1>

      <SearchBar onSearch={fetchRecipes} />

      {loading && <p className="text-center mt-4">Loading....</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <RecipeList
          recipes={recipes}
          onSelectRecipe={setSelectedRecipe}
        />
      )}
    </div>
  );
}

export default App;