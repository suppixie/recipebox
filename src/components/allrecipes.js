import React,{ useEffect,useState } from "react";
import axios from "axios";

// const categories=['snacks','main course','breakfast','vegan','Indian']
export function AllRecipes(){
    const [snacksData, setSnacksData] = useState([])
    const [mainCourseData, setMainCourseData] = useState([])
    const [breakfastData, setBreakfastData] = useState([])
    const [veganData, setVeganData] = useState([])
    const [indianData, setIndianData] = useState([])

    // snacks section
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&tags=snacks&number=4`)
        .then((response)=>{
            setSnacksData(response.data.recipes);
            console.log(response.data.recipes);
        });
    },[]);

    // main course section
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&tags=main course&number=4`)
        .then((response)=>{
            setMainCourseData(response.data.recipes);
            console.log(response.data.recipes);
        });
    },[]);

    // breakfast section
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&tags=breakfast&number=4`)
        .then((response)=>{
            setBreakfastData(response.data.recipes);
            console.log(response.data.recipes);
        });
    },[]);

    // vegan section
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&tags=vegan&number=4`)
        .then((response)=>{
            setVeganData(response.data.recipes);
            console.log(response.data.recipes);
        });
    },[]);

    // indian section
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=58d3c07e65364718a5ae8f75fe6fc1e9&limitLicense=true&tags=indian&number=4`)
        .then((response)=>{
            setIndianData(response.data.recipes);
            console.log(response.data.recipes);
        });
    },[]);

    return(
        <div className="allrecipes">
            <h1>All Recipes</h1>
            <div className="snacks-recipe-list">
                <h2>Snacks</h2>
                {snacksData.map((recipe)=>(
                    <div key={recipe.RecipeID} className="listItem">
                        <img src={recipe.image} alt={recipe.title}></img> 
                        <p>{recipe.title}</p>
                    </div>
                ))}
            </div>

            <div className="maincourse-recipe-list">
                <h2>Main Course</h2>
                {mainCourseData.map((recipe)=>(
                    <div key={recipe.RecipeID} className="listItem">
                        <img src={recipe.image} alt={recipe.title}></img> 
                        <p>{recipe.title}</p>
                    </div>
                ))}
            </div>

            <div className="breakfast-recipe-list">
                <h2>Breakfast</h2>
                {breakfastData.map((recipe)=>(
                    <div key={recipe.RecipeID} className="listItem">
                        <img src={recipe.image} alt={recipe.title}></img> 
                        <p>{recipe.title}</p>
                    </div>
                ))}
            </div>

            <div className="vegan-recipe-list">
                <h2>Vegan</h2>
                {veganData.map((recipe)=>(
                    <div key={recipe.RecipeID} className="listItem">
                        <img src={recipe.image} alt={recipe.title}></img> 
                        <p>{recipe.title}</p>
                    </div>
                ))}
            </div>

            <div className="indian-recipe-list">
                <h2>Indian</h2>
                {indianData.map((recipe)=>(
                    <div key={recipe.RecipeID} className="listItem">
                        <img src={recipe.image} alt={recipe.title}></img> 
                        <p>{recipe.title}</p>
                    </div>
                ))}
            </div>



           
        </div>
    )
}


