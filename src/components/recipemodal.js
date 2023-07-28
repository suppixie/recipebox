import React from "react";
import './styles/recipemodal.css';
import Instructions from "./instructions";

function RecipeModal({ isOpen, onClose, recipeDetails }){
    if (!isOpen) return null;

    return(
        <div className="details">
            <div className="recipe_primary_details"  key={recipeDetails.uri}>
                    <button className="closemodal" onClick={onClose}>Close</button>
                    <img src={recipeDetails.image}/>
                    <div>
                        <p className="cuisine"><b >Cuisine</b>:{recipeDetails.cuisineType} </p>
                        <p className="meal"><b>Meal</b>:{recipeDetails.mealType} </p>
                        <p className="calories"><b> Calories</b>:{Math.abs(recipeDetails.calories)}</p>
                        <p className="servings"><b> Servings</b>:{recipeDetails.yield}</p>
                        <button className="save_recipe">Save</button>
                    </div>

            </div>
            <div className="ingredients_and_instructions">
            <h2>{recipeDetails.label}</h2>
            <hr></hr>
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
        </div>
    );
}

export default RecipeModal;