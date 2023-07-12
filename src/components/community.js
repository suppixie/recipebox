import React from "react";
import './styles/community.css';

function Community(){
    return(
    <div className="community_page">
        <div className="trending">
            <h2>Trending</h2>
            <p>
                #newbie <br/>
                #firstdish <br/>
                #vegan <br/>
                #Spices <br/>
            </p>
        </div>
        <div className="thoughts">
                <div className="public_thoughts">
                    <h2>Thoughts</h2>
                    <div className="thoughts_box">
                        <p>I tried to make lasagna for the first time today. It was delicious.</p>
                        <p>Look at my pretty red pasta.</p>
                    </div>
                    <div className="share_thoughts_textbox">
                        <input type="text" placeholder="Share your thoughts.."></input><br/>
                        <button>upload</button> 
                        <button>Submit</button>
                    </div>
                </div>
                <div className="your_posts">
                    <h2>Your Posts</h2>
                    <div className="posts" hidden>
                    </div>

                </div>
        </div>
    </div>
    )
}

export default Community;