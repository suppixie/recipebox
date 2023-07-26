import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './styles/allrecipes.css'
import axios from "axios";
import RecipePage from "./recipepage";
import { Link } from "react-router-dom";

function CategoryRecipes({ heading }) {
    const [categoryData, setCategoryData] = useState([]);
    const [check, setCheck]=useState(null);
    useEffect(() => {

        axios.get(`https://api.edamam.com/api/recipes/v2?q=${heading}&type=public&beta=true&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&imageSize=REGULAR&random=true`)
            .then((response) => {
                const recipeWithImages= response.data.hits.filter((result)=> result.recipe.image);
                setCategoryData(recipeWithImages.slice(0,6));
                console.log(recipeWithImages.slice(0,6));
                console.log(recipeWithImages.recipe);
            })
    },[]);

    let settings = {
        // dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

   
    return (
        <div className="category snacks_recipe_list">
            <h2>{heading}</h2>
            <Slider  {...settings}>
                {categoryData.map((result) => (
                    <div key={result.recipe.uri} className="slide" >
                        <Link to="/recipe/${result.recipe.label}" state={{ recipeDetails:result.recipe}}>
                        <img src={result.recipe.image} alt={result.recipe.label} ></img>
                        <p>{result.recipe.label}</p></Link>
                    </div>
                ))}
            </Slider>
            {/* {selectedRecipe && <RecipePage recipeDetails={selectedRecipe}/>} */}
        </div>
        
    );
}

export default CategoryRecipes;