import React from "react";
import './styles/recipemodal.css';
import Instructions from "./instructions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Cookies, useCookies } from "react-cookie";
import { faBookmark, faClose, faFire, faUserGroup, faUtensils } from '@fortawesome/free-solid-svg-icons'

function RecipeModal({ isOpen, onClose, recipeDetails }) {
    const [cookies, setCookie] = useCookies(['recipeIds']);
    const handleSave = (uri) => {
        var url = String(uri).split("recipe_")[1];
        var ids = [];
        if (cookies.recipeIds) {
            ids = cookies.recipeIds;
        }
        ids.push(url)
        setCookie('recipeIds', ids, { path: '/' });
        console.log(cookies.recipeIds)
    }
    if (!isOpen) return null;

    return (
        <div className="details">
            <div className="recipe_primary_details" key={recipeDetails.uri}>
                <button className="closemodal" onClick={onClose}><FontAwesomeIcon icon={faClose} /></button>
                <img src={recipeDetails.image} />
                <div>
                    <p className="cuisine "><FontAwesomeIcon className="icons" icon={faUtensils} /><br /><b >Cuisine</b><br />{recipeDetails.cuisineType} </p>
                    <p className="calories"><FontAwesomeIcon className="icons" icon={faFire} /><br /><b> Calories</b><br />{Math.floor(recipeDetails.calories)}</p>
                    <p className="servings"><FontAwesomeIcon className="icons" icon={faUserGroup} /><br /><b> Servings</b><br />{recipeDetails.yield}</p>
                </div>
                <button className="save_button" onClick={e=>handleSave(recipeDetails.uri)}><FontAwesomeIcon icon={faBookmark} /> Save</button>

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
                <Instructions ingredientLines={recipeDetails.ingredientLines} label={recipeDetails.label} />
            </div>
        </div>
    );
}

export default RecipeModal;