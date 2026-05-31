import {blogsData} from "./data.js" 

function postRender() { 
    let htmlString = "" 
    blogsData.forEach((blog) => { 
        htmlString += ` 
                <div class="blog-posts">
                    <img class="blog-image"src="${blog.image}" 
                    style="width: 100%; " aria-label="a blog post image" /> 
                    <p style="font-weight: 400; margin: 0.5em 0.125em;">${blog.date}</p> 
                    <p style="font-weight: 500; margin: 0.5em 0.125em;">${blog.heading}</p> 
                    <p style="font-weight: 400; line-height: 1.25; margin: 0.5em 0.125em;">${blog.textLine}</p>
                </div>
        `
    }) 
    document.querySelector(".post-section").innerHTML = htmlString 
} 

postRender() 
