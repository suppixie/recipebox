import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/home.css';
import { Link } from 'react-router-dom';


function Home(){
    const [randomRecipes, setRandomRecipes] = useState([]);
    const [searchItem, setSearchItem]=useState('');


  useEffect(() => {
    axios
    .get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&imageSize=REGULAR&random=true`)
    .then((response) =>{ setRandomRecipes(response.data.hits.slice(0,4))
      console.log(response.data.hits.slice(0,4))})
    .catch( (error) => console.error('Error fetching recipes:', error))}
    ,[])
        
    const handleChange = (event) => {
        setSearchItem(event.target.value);
    }
    

    return (<>
        <section>
            <div className='landing_page'>
                <div className='tagline'>
                    <h1>Savor The Flavour in Every Recipe!</h1>
                        <input className='search_bar' type='text' placeholder='Enter Ingredient/Dish'
                            value={searchItem}
                            onChange={handleChange}/>
                         <Link to={`/search_results?query=${encodeURIComponent(searchItem)}`}>
                                <button>search</button>
                            </Link>
                </div>
                <div className='animation'>
                    <img></img>
                </div>
            </div>
        </section>
        <section >
              <div className="specials" data-scroll data-scroll-speed="-0.6">
                    <div className="daily_specials_textarea">
                        <h1 >Daily<br/>Specials</h1>
                        <Link to='./allrecipes.js'className="Category-button">View All Recipes</Link>
                    </div>

                    <div className="random_recipe_items">
                        {randomRecipes.map((randomrecipe) => (   
                                      <div key={randomrecipe.recipe.uri}>
                                          <img  src={randomrecipe.recipe.image} alt={randomrecipe.recipe.label}></img>
                                          <h2>{randomrecipe.recipe.label}</h2>
                                      </div>
                                  ))}
                    </div> 
                </div>
        </section>
    </>
  )
}

export default Home;
