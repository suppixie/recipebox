import React ,{useState, useEffect} from "react";
import RecipeModal from "./recipemodal";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './styles/search_results_page.css';
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function SearchResults(location){
    location= useLocation();
    const searchItem = new URLSearchParams(location.search).get('query');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Fetch the search results when the component mounts
        axios
          .get(`https://api.edamam.com/api/recipes/v2?q=${encodeURIComponent(searchItem)}&type=public&beta=true&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&imageSize=REGULAR&random=true`)
            .then((response) => {
                const filteredRecipes= response.data.hits.filter((result)=> {
                    const imageUrl=result.recipe.image;
                    return imageUrl && !imageUrl.includes("https://edamam-product-images.s3.amazonaws.com/web-img/564/5648dc3132160f07414fb225f45c1d09.gif");

                    });
                    setSearchResults(filteredRecipes.slice(0,12));
                console.log(filteredRecipes.slice(0,12));
            })
    },[searchItem]);

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
    useEffect(()=>{
        if (showModal) {
            window.scrollTo(0, 0);
          }
    },[showModal])

    const [cookies,setCookie]=useCookies(['recipe']);

    const handleRecipeUri = (uri)=>{
        setCookie('recipeUri',uri,{path:'/'});
    }
    const [likeCount, setLikeCount]=useState({});
    const handleLikeCount = (uri) => {
        setLikeCount((prevCounts) => ({
          ...prevCounts,
          [uri]: (prevCounts[uri] || 0) + 1,
        }));
      };
    
    return(
            <>           
            <div className="results_page">
                <h2>Search results for {searchItem}</h2>
                <div className="results">
                    {searchResults.map((result) => (
                    <div key={result.recipe.uri} className="search_slide" >
                        <img src={result.recipe.image} onClick={() => openModal(result.recipe)} alt={result.recipe.label} />
                        <p onClick={() => openModal(result.recipe)}>{result.recipe.label}</p>
                        <div className="save_like_buttons">
                            <button className="save_button" onClick={() => handleRecipeUri(result.recipe.uri)}>
                                        <FontAwesomeIcon icon={faBookmark}/></button>
                            <button className="like_button" onClick={() => handleLikeCount(result.recipe.uri)}>
                                <FontAwesomeIcon icon={faHeart}/> {likeCount[result.recipe.uri] || 0}</button>

                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {selectedRecipe && (
                <RecipeModal isOpen={showModal} onClose={closeModal} recipeDetails={selectedRecipe}/>)}
            {showModal && <div className="backdrop" onClick={closeModal}></div>}
        </>
            )

}
export default SearchResults;