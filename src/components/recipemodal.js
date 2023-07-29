import React from "react";
import './styles/recipemodal.css';
import Instructions from "./instructions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faClose, faFire, faUserGroup, faUtensils } from '@fortawesome/free-solid-svg-icons'

function RecipeModal({ isOpen, onClose, recipeDetails }){
    if (!isOpen) return null;

    return(
        <div className="details">
            <div className="recipe_primary_details"  key={recipeDetails.uri}>
                    <button className="closemodal" onClick={onClose}><FontAwesomeIcon icon={faClose}/></button>
                    <img src={recipeDetails.image}/>
                    <div>
                        <p className="cuisine"><FontAwesomeIcon className="icons" icon={faUtensils}/><br/><b >Cuisine</b><br/>{recipeDetails.cuisineType} </p>
                        <p className="calories"><FontAwesomeIcon className="icons"icon={faFire}/><br/><b> Calories</b><br/>{Math.floor(recipeDetails.calories)}</p>
                        <p className="servings"><FontAwesomeIcon className="icons" icon={faUserGroup}/><br/><b> Servings</b><br/>{recipeDetails.yield}</p>
                    </div>
                    <button className="save_button"><FontAwesomeIcon icon={faBookmark}/> Save</button>

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