import React, { useState } from "react";
import './styles/recipemodal.css';

function WhatsappButton({ recipeDetails, wpInstructions }) {
    const [wpPhoneNumber, setWpPhoneNumber] = useState("");
    const wpRecipeTitle = recipeDetails.label;
    const wpRecipeIngredients = recipeDetails.ingredientLines;

    const formattedMessage = () => {
        var message = `Here's the recipe from RecipeBox\n\n*${wpRecipeTitle}*\n\n*Ingredients:*\n`;
        wpRecipeIngredients.map((ingredient) => {
            message += `-` + ingredient + `\n`;
        });
        message += `\n*Instructions:*\n`
        wpInstructions.map((instruction) => {
            message += `-` + instruction + `\n`;
        });
        return (message)
    }

    const handleWhatsappMessage = () => {
        // const message = formattedMessage();
        const encodedMessage = encodeURIComponent(formattedMessage());
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${wpPhoneNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div className="wp_popup">
            <h4>Send the recipe to your WhatsApp</h4>
            <input type="text" value={wpPhoneNumber} 
                onChange={(e) => setWpPhoneNumber(e.target.value)} 
                placeholder="Enter your WhatsApp Number" />
            <button onClick={handleWhatsappMessage} >Send</button>

        </div>
    )

}
export default WhatsappButton;