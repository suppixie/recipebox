import React,{useState,useEffect} from "react";
import { Configuration, OpenAIApi } from "openai";


function Instructions(props){
    const configuration = new Configuration({

        apiKey: process.env.REACT_APP_OPENAI_API_KEY
     });
    //  console.log(process.env.REACT_APP_OPENAI_API_KEY);

     const openai = new OpenAIApi(configuration);
   
     const [result, setResult] = useState([]);
    
     const prompt = `give me the instructions to cook, in bullets without displaying ingredients again-
     recipe: ${props.label}
     ingredients:${props.ingredientLines}`;
   
     async function generateInstructions() {
       const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: prompt,
         temperature: 0,
         max_tokens: 1500,
         frequency_penalty: 0,
         presence_penalty: 0,
       });
   
       const instructionDetails = response.data.choices[0].text
       let sentences = instructionDetails.match(/(?<=• ).+?(?=\n|$)/g);
    //    sentences = sentences.filter(element => isNaN(element));
       console.log(sentences);
       setResult(sentences);
         }
     useEffect(() => {
       generateInstructions();
     }, [prompt]);

        return(
            <div className="instructions">
                 {result.map((instruction,index)=>{
                    return(
                        <div>
                            <h3>Instructions</h3>
                            <ul>
                                <li key={index}>{instruction}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
}
export default Instructions;