import React,{ useEffect,useState} from "react";
import axios from "axios";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/allrecipes.css'
import Slider from "react-slick";


// const categories=['snacks','main course','breakfast','vegan','Indian']
function AllRecipes(){
    const [snacksData, setSnacksData] = useState([])
    const [mainCourseData, setMainCourseData] = useState([])
    const [breakfastData, setBreakfastData] = useState([])
    const [veganData, setVeganData] = useState([])
    const [indianData, setIndianData] = useState([])

    // snacks section
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&tags=snacks&number=5`)
        .then((response)=>{
            setSnacksData(response.data.recipes);
            console.log(response.data.recipes);
        });
    },[]);

    // main course section
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&tags=main course&number=5`)
        .then((response)=>{
            setMainCourseData(response.data.recipes);
            console.log(response.data.recipes);
        });
    },[]);

    // // breakfast section
    // useEffect(()=>{
    //     axios.get(`https://api.spoonacular.com/recipes/random?apiKey=db13c126d43742ffa2836b56ec1957be&limitLicense=true&tags=breakfast&number=4`)
    //     .then((response)=>{
    //         setBreakfastData(response.data.recipes);
    //         console.log(response.data.recipes);
    //     });
    // },[]);

    // // vegan section
    // useEffect(()=>{
    //     axios.get(`https://api.spoonacular.com/recipes/random?apiKey=db13c126d43742ffa2836b56ec1957be&limitLicense=true&tags=vegan&number=4`)
    //     .then((response)=>{
    //         setVeganData(response.data.recipes);
    //         console.log(response.data.recipes);
    //     });
    // },[]);

    // // indian section
    // useEffect(()=>{
    //     axios.get(`https://api.spoonacular.com/recipes/random?apiKey=db13c126d43742ffa2836b56ec1957be&limitLicense=true&tags=indian&number=4`)
    //     .then((response)=>{
    //         setIndianData(response.data.recipes);
    //         console.log(response.data.recipes);
    //     });
    // },[]);

    let settings = {
        // dots: false,
        infinite: true,
        speed: 1000,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,

      }
   

    return(
        <div className="categories_container">
            <div className="allrecipes">
                <div className="category snacks_recipe_list">
                    <h2>Snacks</h2>
                        <Slider {...settings}>
                            {snacksData.map((recipe)=>(
                                <div key={recipe.id} className="slide">
                                    <img src={recipe.image} alt={recipe.title}></img> 
                                    <p>{recipe.title}</p>
                                </div>
                            ))}
                        </Slider>
                </div>

                <div className="category maincourse_recipe_list">
                    <h2>Main Course</h2>
                    <Slider {...settings}>
                            {mainCourseData.map((recipe)=>(
                                <div key={recipe.id} className="slide">
                                    <img src={recipe.image} alt={recipe.title}></img> 
                                    <p>{recipe.title}</p>
                                </div>
                            ))}
                    </Slider>
                </div>
    {/*
                <div className="breakfast_recipe_list">
                    <h2>Breakfast</h2>
                    {breakfastData.map((recipe)=>(
                        <div key={recipe.RecipeID} className="listItem">
                            <img src={recipe.image} alt={recipe.title}></img> 
                            <p>{recipe.title}</p>
                        </div>
                    ))}
                </div>

                <div className="vegan_recipe_list">
                    <h2>Vegan</h2>
                    {veganData.map((recipe)=>(
                        <div key={recipe.RecipeID} className="listItem">
                            <img src={recipe.image} alt={recipe.title}></img> 
                            <p>{recipe.title}</p>
                        </div>
                    ))}
                </div>

                <div className="indian_recipe_list">
                    <h2>Indian</h2>
                    {indianData.map((recipe)=>(
                        <div key={recipe.RecipeID} className="listItem">
                            <img src={recipe.image} alt={recipe.title}></img> 
                            <p>{recipe.title}</p>
                        </div>
                    ))}
                </div> */}
                        </div>

            <div className="sidebar_menu">
                <p className="vr"/>
                <div className="keyword_search">
                    <input type='text' name='keyword_search_input' id="keyword_search_input" placeholder='Enter Ingredient/Dish'/>
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


