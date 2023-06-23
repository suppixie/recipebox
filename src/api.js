const apiQueries = {
    app_id: process.env.REACT_APP_API_ID,
    app_key: process.env.REACT_APP_API_KEY
}

export const fetchSearchData = async (recipeSearch) =>{
    const {app_id,app_key} = apiQueries;
    try { 
        const recipeData = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearch}&app_id=${app_id}&app_key=${app_key}&imageSize=REGULAR&random=true`)
        const response = await recipeData.json()
        return response;}
    catch(error){
        console.log(error);
        return error;

    }
}


export const fetchRandomDish = async () =>{
    const {app_id,app_key} = apiQueries;
    try { 
        const recipeData = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&health=vegan&imageSize=REGULAR&random=true`)
        const response =await recipeData.json()
        return response;}
    catch(error){
        console.log(error);
        return error;

    }
}