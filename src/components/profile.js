import React from "react";
import './styles/profile.css';



function ProfilePage(props){
    const { Username, EmailId } = props.cookieData;
    console.log(props.cookieData)

    
    return(
        <div className="profile_page">
            <div className="user_details">
                <h1>Profile</h1>
                <p className="pp">(0v0)</p>
                <h3>{Username}</h3>
                <p>{EmailId}</p>
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