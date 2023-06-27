import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.bigoven.com/recipes?&pg=1&rpp=5&api_key=hC5Hu6FTCM97ZqMNWAEpu8zLKlUikn4m`)
    .then((response) =>{ setRecipes(response.data.Results)
      console.log(response.data.Results)})
    .catch( (error) => console.error('Error fetching recipes:', error))}
    ,[])

  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
          <h2>Recipe Box</h2>
          <a href='/' target="_blank">Home</a>
          <a href='/' target="_blank">Search</a>
          <a href='/' target="_blank">Community</a>
          <a href='/' target="_blank">Library</a>
      </header>

      {/* landing page */}
      <section>
          <div className='landing_page'>
              <h1>Delicious Vegan Recipes</h1>
          </div>
      </section>
      {/* search-bar and random recipes */}
      <section className='search_and_random'>
        <div>
            <div className='search_bar'>
                <h2>Search for recipes</h2>
                <input type='text' name='search_input' id="search_input" placeholder='Enter Ingredient/Dish'/>
            </div>

            <div className='random_dishes'>
            {recipes.map((recipe) => (
              <div key={recipe.RecipeID}>
                <img height={150} src={recipe.HeroPhotoUrl} alt={recipe.Title}></img>
                <h2>{recipe.Title}</h2>
                <p>Category: {recipe.Category}</p>
                {/* Render other recipe details */}
              </div>
      ))}
            </div>
        </div>
      </section>
    </div>


)};

export default App;


