import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // redirect to home or recipe list page
    }
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: '#f44336' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
