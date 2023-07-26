import React,{useState,useEffect} from "react";
import { Configuration, OpenAIApi } from "openai";

function Instructions(props){
        const configuration = new Configuration({
                 apiKey: process.env.REACT_APP_OPENAI_API_KEY,
                });
        const openai = new OpenAIApi(configuration);
        const [result,setResult]=useState([])

        const prompt = `give me the instructions to cook in bullets without displaying ingredients again-
        recipe: ${props.label}
        ingredients:${props.ingredientLines}`

        async function getInstructions(){
            const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 7,
            temperature: 0,
            });

        const instructionDetails=response.data.choices[0].text;
        let sentences = instructionDetails.split(/(?<![a-zA-Z\d])\d+. /);
        sentences = sentences.filter(element => isNaN(element));
        console.log(sentences);
        setResult(sentences);
        }

        useEffect(()=>{
            getInstructions();
        },[prompt]);

        return(
            <div className="instructions">
                 {result.map((instruction,index)=>{
                        <div key={index}>
                            {instruction}
                        </div>
                })}
            </div>
        )
}
export default Instructions;