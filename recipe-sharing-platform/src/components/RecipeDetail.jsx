import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded mb-4"/>
      <h2 className="text-xl font-semibold mt-2">Ingredients:</h2>
      <p className="text-gray-700 mb-4">List ingredients here...</p>
      <h2 className="text-xl font-semibold mt-2">Preparation Steps:</h2>
      <p className="text-gray-700">Describe cooking steps here...</p>
    </div>
  );
};

export default RecipeDetail;
