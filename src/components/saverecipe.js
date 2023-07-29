import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = () => {
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const handleSaveRecipe = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setSuccess(null);
      const response = await axios.post('/api/recipes/save', recipeData);
      setSuccess(response.data.message);
      setRecipeData({ title: '', ingredients: '', instructions: '' });
      fetchSavedRecipes();
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const fetchSavedRecipes = async () => {
    try {
      setError(null);
      const response = await axios.get('/api/recipes');
      setSavedRecipes(response.data);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <h2>Recipe Saving</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSaveRecipe}>
        <input type="text" name="title" value={recipeData.title} onChange={handleChange} placeholder="Recipe Title" required />
        <textarea name="ingredients" value={recipeData.ingredients} onChange={handleChange} placeholder="Ingredients" required></textarea>
        <textarea name="instructions" value={recipeData.instructions} onChange={handleChange} placeholder="Instructions" required></textarea>
        <button type="submit">Save Recipe</button>
      </form>
      <div>
        <h2>Saved Recipes</h2>
        {savedRecipes.length === 0 ? (
          <p>No saved recipes yet</p>
        ) : (
          <ul>
            {savedRecipes.map((recipe, index) => (
              <li key={index}>
                <h3>{recipe.title}</h3>
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Instructions: {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
