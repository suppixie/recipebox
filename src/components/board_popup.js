import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import './styles/board_popup.css';
import React from 'react';

function BoardPopup(recipeData){
        const savedMessage =()=>{
            alert('Saved!')
        }
    return(
        <div className='board_popup'>
            <p>Save your recipe</p>
            <p className='create_board_button'><button><FontAwesomeIcon icon={faAdd}/></button> Create a Board</p>
            <div className='boards_on_popup'>
                <p onClick={savedMessage}>Recipes to Try</p>
                <p onClick={savedMessage}>Favourites</p>
            </div>
        </div>
    )
}

export default BoardPopup;