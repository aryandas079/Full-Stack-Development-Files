let blogsArray = []

function findPosts() { 
    fetch("https://apis.scrimba.com/jsonplaceholder/posts") 
        .then(response => response.json()) 
        .then(data => { 
            blogsArray = data.slice(0, 50) 
            renderBlog()
        })
}

function renderBlog() { 
    let htmlString = ""
    blogsArray.forEach((blog) => {
        htmlString +=   `
                    <div class="blogs"> 
                        <p id="title">${blog.title}</p> 
                        <p id="blog-body">${blog.body}</p>
                    </div>
                `
    })
    document.querySelector(".blog-posts").innerHTML = htmlString
} 

function createPost() { 
    document.querySelector("form").addEventListener("submit", (event) => { 
        event.preventDefault() 
        const formData = new FormData(event.target) 
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({ 
                title: formData.get("blog-title"), 
                body: formData.get("blog-body") 
            })
        }) 
            .then(response => response.json()) 
            .then(data => { 
                blogsArray.unshift(data) 
                renderBlog() 
                document.querySelector("form").reset();
            }) 
    })
} 

document.querySelector("footer").innerHTML = ` 
            <p>&copy; BlogSpace ${new Date().getFullYear()}</p>            
`

findPosts() 
createPost() 
