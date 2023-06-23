import React,{ useEffect,useState } from "react";
import { fetchSearchData } from "./api";

export function AllRecipes(){
    const [searchKeyword, setSearchKeyword] = useState('')
    const [query,setQuery] = useState('pasta');
    const [recipeData, setRecipeData] = useState({})

    useEffect(()=>{
        fetchSearchData(query).then((response)=>{
            setRecipeData(response)
            console.log(response);
        });
    },[]);

    return(
        <div className="recipelist">
            <h1>All Recipes</h1>
            <div className="list">
            {recipeData && recipeData.hits ? ( recipeData.hits.map((item,index)=>(
                <div key={index} className="listItem">
                    <img src={item.recipe.image.regular} alt={item.recipe.label}></img> 
                    <p>{item.recipe.label}</p>
                    <p>{item.recipe.ingredientLines}</p>
                </div>
            ))): (
                <p>Loading...</p>
              )}
            </div>
        </div>
    )
}

