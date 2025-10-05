import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg shadow hover:shadow-lg transition p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded"/>
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 mt-1">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-2 inline-block">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
