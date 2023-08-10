import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/home.css';
import { Link } from 'react-router-dom';
import cooking from './Recipe.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecipeModal from './recipemodal';


function Home() {
    const [randomRecipes, setRandomRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState('');


    useEffect(() => {
        axios
            .get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&imageSize=REGULAR&random=true`)
            .then((response) => {
                setRandomRecipes(response.data.hits.slice(0, 4))
                console.log(response.data.hits.slice(0, 4))
            })
            .catch((error) => console.error('Error fetching recipes:', error))
    }
        , [])

    const handleChange = (event) => {
        setSearchItem(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.assign(`/search_results?query=${encodeURIComponent(searchItem)}`)
    }

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


    return (<>
        <section>
            <div className='landing_page'>
                <div className='tagline'>
                    <h1>Savor The Flavour<br/> in Every Recipe!</h1>
                    <form className='search_recipe' onSubmit={e => handleSubmit(e)}>
                        <input className='search_bar' type='text' placeholder='Enter Ingredient/Dish'
                            value={searchItem}
                            required
                            onChange={handleChange} />
                        <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                </div>
                <div className='animation'>
                    <img src={cooking}></img>
                </div>
            </div>
        </section>
        <section >
            <div className="specials" data-scroll data-scroll-speed="-0.6">
                <div className="daily_specials_textarea">
                    <h1 >Daily<br />Specials</h1>
                    <Link to='./allrecipes' className="Category-button">View All Recipes</Link>
                </div>

                <div className="random_recipe_items">
                    {randomRecipes.map((randomrecipe) => (
                        <div key={randomrecipe.recipe.uri}>
                            <img src={randomrecipe.recipe.image} alt={randomrecipe.recipe.label} onClick={() => openModal(randomrecipe.recipe)} ></img>
                            <h2 onClick={() => openModal(randomrecipe.recipe)} >{randomrecipe.recipe.label}</h2>
                        </div>
                    ))}
                </div>
            </div>
            {selectedRecipe && (
                <RecipeModal isOpen={showModal} onClose={closeModal} recipeDetails={selectedRecipe} />)}
            {showModal && <div className="backdrop" onClick={closeModal}></div>}
        </section>
    </>
    )
}

export default Home;
