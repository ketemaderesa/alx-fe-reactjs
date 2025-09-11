import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't added any recipes to your favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;