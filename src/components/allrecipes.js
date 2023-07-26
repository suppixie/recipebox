import React, { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/allrecipes.css'
import CategoryRecipes from "./categoryrecipes";


function AllRecipes() {
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
                    <input type='text' name='keyword_search_input' id="keyword_search_input" placeholder='Enter Ingredient/Dish' />
                    <p>Keywords to try</p>
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


