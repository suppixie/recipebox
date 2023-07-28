import React, { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/allrecipes.css'
import CategoryRecipes from "./categoryrecipes";
import { Link } from 'react-router-dom';



function AllRecipes() {
    const [searchItem, setSearchItem]=useState('');
    const handleChange = (event) => {
        setSearchItem(event.target.value);
    }
    
    return (
        <div className="categories_container">
            <div className="allrecipes">
                <CategoryRecipes heading="Snacks" />
                <CategoryRecipes heading="Main Course" />
                <CategoryRecipes heading="Breakfast" />
                <CategoryRecipes heading="Vegan" />
                <CategoryRecipes heading="Indian" />
            </div>

            <div className="sidebar_menu">
                <p className="vr" />
                <div className="keyword_search">
                        <input className='search_bar' type='text' placeholder='Enter Ingredient/Dish'
                            value={searchItem}
                            onChange={handleChange}/>
                         <Link to={`/search_results?query=${encodeURIComponent(searchItem)}`}>
                                <button>search</button>
                            </Link> 
                    <p>Try Searching for</p>
                    <ul>
                        <li>Vegetarian</li>
                        <li>Pasta</li>
                        <li>Pizza</li>
                        <li>Vegetarian</li>

                    </ul>
                    {/* {cuisineData.map((keyword)=()=>{
                        <p key={recipe.cuisines}>{recipe.cuisines}</p>

                    })} */}
                </div>
            </div>



        </div>
    )
}

export default AllRecipes;


