import React from "react";
import { useLocation } from "react-router-dom";
import './styles/recipepage.css';
import Instructions from "./instructions";

function RecipePage(){
    const location=useLocation();
    const {recipeDetails}=location.state

    return(
        <div className="details">
            <div className="recipe_primary_details"  key={recipeDetails.uri}>
                
                    <img src={recipeDetails.image}/>
                    <div>
                        <h2>{recipeDetails.label}</h2>
                        <p><b>Cuisine</b>:{recipeDetails.cuisineType} <br/><b>Meal</b>:{recipeDetails.mealType}<br/> <b>Calories</b>:{Math.abs(recipeDetails.calories)}</p>
                        <button className="save_recipe">Save</button>
                        {/* <p>*Saves recipe to the box*</p> */}
                    </div>
            </div>

            <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul> {recipeDetails.ingredientLines && 
                        recipeDetails.ingredientLines.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                         ))}
                    </ul>
                    
            </div>
            <Instructions ingredientLines={recipeDetails.ingredientLines} label={recipeDetails.label}/>
        </div>
    );
}

export default RecipePage;