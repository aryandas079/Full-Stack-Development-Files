import {tweetsData} from "./data.js" 


function render() {
    let htmlString = ""
    tweetsData.forEach((tweet) => { 
        htmlString += ` 
            <div class="post"> 
                    <img src="${tweet.profilePic}" alt="profile picture of ${tweet.handle}" 
                    style="width: 50px; height: 50px; 
                    border-radius: 50%; padding: 5px;"/> 
                    <div class="post-contents"> 
                        <p style="font-size: 0.75rem; font-weight: 300;">${tweet.handle}</p> 
                        <p>${tweet.tweetText}</p> 
                        <div class="engagement"> 
                            <div class="engagement-items"> 
                                <p id="comment-count">${tweet.replies.length}</p>
                                <i class="fa-solid fa-comment"></i> 
                            </div> 
                            <div class="engagement-items"> 
                                <p id="heart-count">${tweet.likes}</p> 
                                <i class="fa-solid fa-heart"></i> 
                            </div>
                            <div class="engagement-items"> 
                                <p id="retweet-count">${tweet.retweets}</p>
                                <i class="fa-solid fa-retweet"></i>
                            </div>
                        </div>
                    </div> 
                </div>
            ` 
    })
    document.querySelector(".post-section").innerHTML = htmlString 
} 


render()

                