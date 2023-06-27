import './App.css';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import RandomRecipes from './api';

const App = () => {
  

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
            <RandomRecipes/>
            </div>
        </div>
      </section>
    </div>


)};

export default App;


