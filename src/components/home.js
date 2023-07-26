import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/home.css';


function Home(){
    const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&imageSize=REGULAR&random=true`)
    .then((response) =>{ setRandomRecipes(response.data.hits.slice(0,4))
      console.log(response.data.hits.slice(0,4))})
    .catch( (error) => console.error('Error fetching recipes:', error))}
    ,[])

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

              <div className="specials" data-scroll data-scroll-speed="-0.6">
                    <div className="textbox2">
                        <h1 >Daily<br/>Specials</h1>
                        <button className="Category-button" onClick="">View All Recipes</button>
                    </div>

                    <div className="items">
                        {randomRecipes.map((randomrecipe) => (   
                                      <div key={randomrecipe.recipe.uri}>
                                          <img  src={randomrecipe.recipe.image} alt={randomrecipe.recipe.label}></img>
                                          <h2>{randomrecipe.recipe.label}</h2>
                                      </div>
                                  ))}
                    </div> 
                </div>
                
          </div>
        </section>
    </>
  )
}

export default Home;






