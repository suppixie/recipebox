import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/home.css';


function Home(){
    const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&number=5`)
    .then((response) =>{ setRandomRecipes(response.data.recipes)
      console.log(response.data.recipes)})
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
  
              <div className='random_dishes'>
                {randomRecipes.map((randomrecipe) => (
                    <div key={randomrecipe.id}>
                        <img height={150} src={randomrecipe.image} alt={randomrecipe.title}></img>
                        <h2>{randomrecipe.title}</h2>
                        <p>Cuisine: {randomrecipe.cuisines[0]}</p>
                    </div>
                ))}
              </div>
          </div>
        </section>
    </>
  )
}

export default Home;