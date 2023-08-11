import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './styles/categoryrecipes.css'
import axios from "axios";
import RecipeModal from "./recipemodal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {  useCookies } from "react-cookie";

function CategoryRecipes({ heading }) {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {

        axios.get(`https://api.edamam.com/api/recipes/v2?q=${heading}&type=public&beta=true&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&imageSize=REGULAR&random=true`)
            .then((response) => {
                const filteredRecipes = response.data.hits.filter((result) => {
                    const imageUrl = result.recipe.image;
                    return imageUrl && !imageUrl.includes("https://edamam-product-images.s3.amazonaws.com/web-img/564/5648dc3132160f07414fb225f45c1d09.gif");

                });
                setCategoryData(filteredRecipes.slice(0, 6));
                console.log(filteredRecipes.slice(0, 6));
            })
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
    // 

    const [cookies, setCookie] = useCookies(['recipeIds']);
    
    const handleRecipeUri = (uri) => {
        var url = String(uri).split("recipe_")[1];
        var ids = [];
        if (cookies.recipeIds) {
            ids = cookies.recipeIds;
        }
        ids.push(url)
        setCookie('recipeIds', ids, { path: '/' });
        console.log(cookies.recipeIds)
        alert("Saved to Profile");

    }
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLikeCount = () => {
        if (liked) {
            setLikeCount((prevCount) => prevCount - 1);
          } else {
            setLikeCount((prevCount) => prevCount + 1);
          }
          setLiked((prevLiked) => !prevLiked);

    };


    let settings = {
        // dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    }


    return (
        <div className="category snacks_recipe_list">
            <h2 className="category_heading">{heading}</h2>

            <Slider  {...settings}>
                {categoryData.map((result) => (
                    
                    <div key={result.recipe.uri} className="slide" >
                        <img onClick={() => openModal(result.recipe)} src={result.recipe.image} alt={result.recipe.label} ></img>
                        <p onClick={() => openModal(result.recipe)}>{result.recipe.label}</p>
                        <div className="save_like_buttons">
                            <button className="save_button" onClick={() => handleRecipeUri(result.recipe.uri)}>
                                <FontAwesomeIcon icon={faBookmark} /></button>
                            <button className="like_button" onClick={handleLikeCount}>
                                <FontAwesomeIcon icon={faHeart} /> {likeCount}</button>
                           
                        </div>
                    </div>
                ))}
            </Slider>
            {selectedRecipe && (
                <RecipeModal isOpen={showModal} onClose={closeModal} recipeDetails={selectedRecipe} />)}
            {showModal && <div className="backdrop" onClick={closeModal}></div>}

        </div>

    );
}

export default CategoryRecipes;