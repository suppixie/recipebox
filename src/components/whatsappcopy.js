import React, { useState,useEffect } from "react";
import axios from "axios";
import Instructions from "./instructions";

function WhatsappButton({recipeDetails}){
    const [wpPhoneNumber, setWpPhoneNumber]=useState("");
    const wpRecipeTitle= recipeDetails.label;
    const wpRecipeIngredients=recipeDetails.ingredientLines;
    console.log(wpRecipeTitle,wpRecipeIngredients);


    const handleWhatsappMessage=(wpPhoneNumber)=>{
        const message=`Here's the recipe from RecipeBox\n\n${wpRecipeTitle}\n\nIngredients:\n${wpRecipeIngredients}\n\n Instructions:\n${()=>{<Instructions
            ingredientLines={wpRecipeIngredients}
            label={wpRecipeTitle}
        />}}`
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${wpPhoneNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
  
    return(
        <div>
            <h3>Send the recipe to your WhatsApp</h3>
        
            <input type="text" value={wpPhoneNumber} onChange={(e) => setWpPhoneNumber(e.target.value)} placeholder="Enter your WhatsApp Number"/>
            <button onClick={handleWhatsappMessage} >Send</button>
            
        </div>
    )

}
export default WhatsappButton;