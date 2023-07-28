import React from "react";
import './styles/profile.css';



function ProfilePage(){
    
    return(
        <div className="profile_page">
            <div className="user_details">
                <h1>Profile</h1>
                <p className="pp">MP</p>
                <h3>Mamtha Patalay</h3>
                <p><b>Followers</b>:145</p>
                <p><b>Following</b>:115</p>
            </div>
            <hr></hr>
            <div className="boards">
                <div className="board">
                    <p>Vegan</p>
                </div>
                <div className="board">
                    <p>Indian</p>
                </div>
                <div className="board">
                    <p>Chinese</p>
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;