import React,{useState,useEffect} from "react";
import { Configuration, OpenAIApi } from "openai";
const axios = require('axios');


function Instructions(props){
    const [result, setResult] = useState([]);
    const prompt = `give me the instructions to cook, in bullets without displaying ingredients again-
        recipe: ${props.label}
        ingredients:${props.ingredientLines}`;

    function getInstructions() {
            const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
            const apiUrl = "https://api.openai.com/v1/engines/text-davinci-003/completions";

            const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
            };
            
            const data = {
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 10,
            temperature: 0
            };

            axios.post(apiUrl, data, { headers })
            .then(response => {
                const instructionDetails = response.data.choices[0].text;
                let sentences = instructionDetails.split(/(?<![a-zA-Z\d])\d+. /);
                sentences = sentences.filter(element => isNaN(element));
                console.log(sentences);
                setResult(sentences);
            })
            .catch(error => {
                console.error("Error:", error.response.data); // Handle errors
            });
        }

        useEffect(()=>{
            getInstructions();
        },[prompt]);

        return(
            <div className="instructions">
                 {result.map((instruction,index)=>{
                    return(
                        <div key={index}>
                            {instruction}
                        </div>
                    )
                })}
            </div>
        )
}
export default Instructions;