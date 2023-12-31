import React, { useState, useEffect } from "react";
import './styles/profile.css';
import { useCookies } from "react-cookie";
import axios from "axios";
import RecipeModal from './recipemodal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import ProfilePic from "./profilepicture";


function ProfilePage() {
    const [cookies,removeCookie] = useCookies([])
    const recipeIds = (cookies.recipeIds);
    const [recipeTile, setRecipeTile] = useState([]);

    useEffect(() => {
        if (recipeIds) {
            recipeIds.map((id) => {
                axios.get(`https://api.edamam.com/api/recipes/v2/${encodeURIComponent(id)}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)                    .then((response) => {
                        setRecipeTile((prevRecipes => { return [...prevRecipes, response.data] }));
                        console.log(response.data);
                    })
                    .catch((error) => console.error('Error fetching recipes:', error))
            })
        }
    }, []);

        // Modal
        const [selectedRecipe, setSelectedRecipe] = useState(null);
        const [showModal, setShowModal] = useState(false);
    
    
        const openModal = (recipe) => {
            setSelectedRecipe(recipe);
            document.body.style.overflow = "hidden";
            setShowModal(true);
        };
    
        const closeModal = () => {
            setSelectedRecipe(null);
            document.body.style.overflow = "auto";
            setShowModal(false);
        };
        useEffect(() => {
            if (showModal) {
                window.scrollTo(0, 0);
            }
        }, [showModal])
        
   

    return (
        <>
            {cookies.user || cookies.EmailId ?

            <div className="profile_page">
                <div className="user_details">
                    <div className="user_primary_details">
                        <h1>Profile</h1>
                        <div className="profilepicarea">
                            <img className="pp" src={cookies['profile-pic']}></img>
                            <Popup 
                                trigger={<button className="editpp"><FontAwesomeIcon icon={faPencil}/></button>}  position="right center">
                                <ProfilePic/>
                            </Popup>
                        </div>

                        <h3>{cookies['Username']}</h3>
                        <p>{cookies['EmailId']}</p>
                    </div>

                    <div className="user_secondary_details">
                    </div>
                </div>


                <div className="board">
                    <h1>Your CookBook</h1>
                    <div className="recipes_display">
                        {recipeTile.map((result) => (
                            <div className="recipe_tile" key={result.recipe.uri}>
                                <img onClick={() => openModal(result.recipe)} src={result.recipe.images.SMALL.url} alt={result.recipe.label}></img>
                                <p onClick={() => openModal(result.recipe)}>{result.recipe.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedRecipe && (
                    <RecipeModal isOpen={showModal} onClose={closeModal} recipeDetails={selectedRecipe} />)}
                {showModal && <div className="backdrop" onClick={closeModal}></div>}
                </div>
                : window.location.assign('/Signup')}
        </>
    );
}
export default ProfilePage;