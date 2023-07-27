import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './styles/categoryrecipes.css'
import axios from "axios";
import RecipeModal from "./recipepage";

function CategoryRecipes({ heading }) {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {

        axios.get(`https://api.edamam.com/api/recipes/v2?q=${heading}&type=public&beta=true&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&imageSize=REGULAR&random=true`)
            .then((response) => {
                const recipeWithImages= response.data.hits.filter((result)=> result.recipe.image);
                setCategoryData(recipeWithImages.slice(0,6));
                console.log(recipeWithImages.slice(0,6));
            })
    },[]);

    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const openModal = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
        setShowModal(false);
    };

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
                    <div key={result.recipe.uri} className="slide" onClick={() => openModal(result.recipe)}>
                        <img src={result.recipe.image} alt={result.recipe.label} ></img>
                        <p>{result.recipe.label}</p>
                    </div>
                ))}
            </Slider>
            {selectedRecipe && (
                <RecipeModal isOpen={showModal} onClose={closeModal} recipeDetails={selectedRecipe}/>)}
        </div>
        
    );
}

export default CategoryRecipes;