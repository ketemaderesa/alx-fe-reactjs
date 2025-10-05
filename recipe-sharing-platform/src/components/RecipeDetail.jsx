import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Recipe not found...</p>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">{recipe.title}</h1>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition shadow-md hover:shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
