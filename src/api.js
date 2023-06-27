import React, { useEffect, useState } from 'react';
import axios from 'axios';


// const apiKey=process.env.REACT_APP_API_KEY;
const RandomRecipes = () =>{
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.spoonacular.com/recipes/random?apiKey=b5328ae4f8a442b8bae5518c50307ddb&limitLicense=true&number=5`)
    .then((response) =>{ setRandomRecipes(response.data.recipes)
      console.log(response.data.recipes)})
    .catch( (error) => console.error('Error fetching recipes:', error))}
    ,[])

  return(
    <div>
       {randomRecipes.map((randomrecipe) => (
              <div key={randomrecipe.RecipeID}>
                <img height={150} src={randomrecipe.image} alt={randomrecipe.title}></img>
                <h2>{randomrecipe.title}</h2>
                <p>Cuisine: {randomrecipe.cuisines[0]}</p>
              </div>
      ))}
    </div>
  )

}

export default RandomRecipes;
