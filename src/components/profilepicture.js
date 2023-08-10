import React, { useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import './styles/profile.css';

function ProfilePic(){
    const ppOptionsList=[
        "https://cdn-icons-png.flaticon.com/512/284/284831.png",
        "https://cdn-icons-png.flaticon.com/512/284/284824.png",
        "https://cdn-icons-png.flaticon.com/512/284/284808.png",
        "https://cdn-icons-png.flaticon.com/512/284/284791.png",
        "https://cdn-icons-png.flaticon.com/512/284/284815.png",
        "https://cdn-icons-png.flaticon.com/512/284/284794.png",
        "https://cdn-icons-png.flaticon.com/512/284/284800.png",
        "https://cdn-icons-png.flaticon.com/512/284/284821.png",
        "https://cdn-icons-png.flaticon.com/512/284/284828.png",
        "https://cdn-icons-png.flaticon.com/512/284/284790.png" 
    ]
    const [cookies, setCookie] = useCookies(['recipeIds']);
    const [selectedPP,setSelectedPP]=useState('')

    useEffect(() => {
        const savedProfilePic = cookies["profile-pic"];
        if (savedProfilePic) {
            setSelectedPP(savedProfilePic);
        } else {
            setSelectedPP(ppOptionsList[0]);
        }
    }, []);

    const handlePPChange=(option)=>{
        setSelectedPP(option);
        setCookie("profile-pic",option);
        console.log(option)
    }
    const refresh =()=>{
        window.location.reload();
    }
    return(
        <div className="pp_selection">
            <div className="pp_heading">
                <h3>Pick your Profile Picture</h3>
                <button className="savepp" onClick={refresh}>Save</button>
            </div>

            <div className="pp_options">
                {ppOptionsList.map((option,index)=>(
                     <div key={index} onClick={() => handlePPChange(option)}>
                     <img
                       src={option}
                       alt={`Profile Pic`}
                       className={selectedPP === option ? "selected" : ""}/>
                        </div>
                ))}
            </div>
        </div>
    )

}
export default ProfilePic;