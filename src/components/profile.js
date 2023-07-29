import React,{useState,useEffect}from "react";
import './styles/profile.css';
import { useCookies } from "react-cookie";
import axios from "axios";


function ProfilePage(){
    const [cookies]=useCookies([])
    const recipeuri=encodeURIComponent(cookies['recipeUri']);
    const [recipeTile, setRecipeTile] = useState([]);
    console.log(recipeTile);
    useEffect(() => {

        axios.get(`https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${recipeuri}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
            .then((response) => {
                setRecipeTile(response.data.hits);
                console.log(response.data.hits);
            })
            .catch( (error) => console.error('Error fetching recipes:', error))
        },[]);

        // useEffect(()=>{
        //     localStorage.setItem('recipeTile',JSON.stringify('recipeTile'))
        // })

        // useEffect(()=>{
        //     const cookBook= JSON.parse(localStorage.getItem('items'));
        // })

    return(
        <div className="profile_page">
            <div className="user_details">
                <h1>Profile</h1>
                <p className="pp">(0v0)</p>
                <h3>{cookies['Username']}</h3>
                <p>{cookies['EmailId']}</p>
                <p><b>Followers:</b>12</p>
                <p><b>Following:</b>20</p>
            </div>

            <hr></hr>

            <div className="board">
                    <h1>Your CookBook</h1>
                        {recipeTile.map((result) => (
                            <div key={result.recipe.uri}>
                                <img src={result.recipe.images.SMALL.url}></img> 
                                <p>{result.recipe.label}</p>
                        </div>
                        ))}
                </div>
        </div>
    );
}
export default ProfilePage;