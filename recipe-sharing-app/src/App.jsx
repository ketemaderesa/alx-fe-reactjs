import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Recipe</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        
        <h1>Recipe Sharing App</h1>
        
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <RecommendationsList />
              <RecipeList />
            </>
          } />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;