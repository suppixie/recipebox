import React, { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/allrecipes.css'
import CategoryRecipes from "./categoryrecipes";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



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
                <div className="keyword_search">
                        <div>

                        <input className='search_bar' type='text' placeholder='Enter Ingredient/Dish'
                            value={searchItem}
                            onChange={handleChange}/>
                         <Link to={`/search_results?query=${encodeURIComponent(searchItem)}`}>
                                <button className="search_button"><FontAwesomeIcon icon={faSearch}/></button>
                            </Link> 
                            </div>
                    <p>Try Searching for. . . </p>
                    <ul>
                        <Link to={`/search_results?query=${'Vegetarian'}`}><li>Vegetarian</li></Link>
                        <Link to={`/search_results?query=${'Pasta'}`}><li>Pasta</li></Link>
                        <Link to={`/search_results?query=${'Pizza'}`}><li>Pizza</li></Link>
                        <Link to={`/search_results?query=${'Falafel'}`}><li>Falafel</li></Link>
                        <Link to={`/search_results?query=${'Sushi'}`}><li>Sushi</li></Link>
                        <Link to={`/search_results?query=${'Macaroni and Cheese'}`}><li>Macaroni and Cheese</li></Link>
                        <Link to={`/search_results?query=${'Croissant'}`}><li>Croissant</li></Link>
                        <Link to={`/search_results?query=${'Nachos'}`}><li>Nachos</li></Link>
                        <Link to={`/search_results?query=${'Matcha cheesecake'}`}><li>Matcha cheesecake</li></Link>
                        <Link to={`/search_results?query=${'Palak Paneer'}`}><li>Palak Paneer</li></Link>
                        <Link to={`/search_results?query=${'Biryani'}`}><li>Biryani</li></Link>
                        <Link to={`/search_results?query=${'Sorbet'}`}><li>Sorbet</li></Link>
                        <Link to={`/search_results?query=${'Margarita'}`}><li>Margarita</li></Link>
                        <Link to={`/search_results?query=${'Banana Bread'}`}><li>Banana Bread</li></Link>












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


