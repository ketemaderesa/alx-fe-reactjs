import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  // Recipe actions
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),
  
  // Search actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),
  
  // Recommendations
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  })
}));

export default useRecipeStore;