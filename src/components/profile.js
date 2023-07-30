import React, { useState, useEffect } from "react";
import './styles/profile.css';
import { useCookies } from "react-cookie";
import axios from "axios";


function ProfilePage() {
    const [cookies] = useCookies([])
    const recipeIds = (cookies.recipeIds);
    const [recipeTile, setRecipeTile] = useState([]);

    useEffect(() => {
        if (recipeIds) {
            recipeIds.map((id) => {
                axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
                    .then((response) => {
                        setRecipeTile((prevRecipes => { return [...prevRecipes, response.data] }));
                        console.log(response.data);
                    })
                    .catch((error) => console.error('Error fetching recipes:', error))
            })
        }
    }, []);


    return (
        <>
            {cookies.user || cookies.EmailId ?

            <div className="profile_page">
                <div className="user_details">
                    <div className="user_primary_details">
                        <h1>Profile</h1>
                        <p className="pp">(0v0)</p>
                        <h3>{cookies['Username']}</h3>
                        <p>{cookies['EmailId']}</p>
                    </div>
                    <div className="user_secondary_details">
                        <p><b>Followers: </b>12</p>
                        <p><b>Following: </b>20</p>
                    </div>
                </div>


                <div className="board">
                    <h1>Your CookBook</h1>
                    <div className="recipes_display">
                        {recipeTile.map((result) => (
                            <div className="recipe_tile" key={result.recipe.uri}>
                                <img src={result.recipe.images.SMALL.url}></img>
                                <p>{result.recipe.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                : window.location.assign('/Signup')}
        </>
    );
}
export default ProfilePage;