import React from 'react';
import RandomRecipes from '../api';

function Home(){
    return (<>
        <section>
            <div className='landing_page'>
                <h1>Delicious Vegan Recipes</h1>
            </div>
        </section>
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
    </>
  )
}

export default Home;