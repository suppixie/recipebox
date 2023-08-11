import React, { useState } from "react";
import './styles/recipemodal.css';
import Instructions from "./instructions";
import { useCookies } from "react-cookie";
import Popup from "reactjs-popup";
import WhatsappButton from './whatsappcopy'

function RecipeModal({ isOpen, onClose, recipeDetails }) {
    const [cookies, setCookie] = useCookies(['recipeIds']);
    const [wpInstructions, setWpInstructions] = useState([]);
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
                <img src={recipeDetails.image} />
                <div>
                    <p className="cuisine "> <i className="fa-solid fa-utensils icons" /><br /><b >Cuisine</b><br />{recipeDetails.cuisineType} </p>
                    <p className="calories"><i className="fa-solid fa-fire icons" /><br /><b> Calories</b><br />{Math.floor(recipeDetails.calories)}</p>
                    <p className="servings"><i className="fa-solid fa-user-group icons" /><br /><b> Servings</b><br />{recipeDetails.yield}</p>
                </div>
                <button className="save_button" onClick={e => handleSave(recipeDetails.uri)}><i class="fa fa-solid fa-bookmark" /> Save</button>
                <Popup  trigger={<button className="whatsapp_button"><i class="fa fa-brands fa-whatsapp" /> Share</button>} position={"right center"} >
                    <WhatsappButton recipeDetails={recipeDetails} wpInstructions={wpInstructions} />
                </Popup>

            </div>
            <div className="ingredients_and_instructions">
                <div className="recipe_title">
                    <h2 >{recipeDetails.label}</h2>
                    <button className="closemodal" onClick={onClose}><i class="fa-solid fa-close" /></button>
                </div>
                <hr></hr>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul> {recipeDetails.ingredientLines &&
                        recipeDetails.ingredientLines.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                </div>
                <Instructions ingredientLines={recipeDetails.ingredientLines} label={recipeDetails.label} wpInstructions={wpInstructions} setWpInstructions={setWpInstructions} />
            </div>
        </div>
    );
}

export default RecipeModal;