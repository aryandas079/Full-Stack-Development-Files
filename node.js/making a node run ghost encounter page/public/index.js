// making the footer get the live year  
if (document.getElementById("footer")) {
    document.getElementById("footer").textContent =
        `From the Other Side © ${new Date().getFullYear()} All Rights Reserved.`
}


const form = document.getElementById("form")



// this function is used to get data from the server via locally hosted API
async function Sights() {
    if (!document.getElementById("sights")) return;
    const response = await fetch("/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const dataObj = await response.json()
    renderData(dataObj, "sights")
}


// this function below is used to upload data to the server by locally hosted API 
document.addEventListener("submit", (event) => {
    event.preventDefault()
    if (event.target !== form) return;
    const formData = new FormData(event.target)
    async function uploadSights() {
        const cryptoID = crypto.randomUUID()
        const body = {
            uuid: cryptoID,
            location: formData.get("location"),
            timeStamp: formData.get("datetime"),
            title: formData.get("name"),
            text: formData.get("text")
        }
        const response = await fetch("/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
    }
    uploadSights()
})



// this functions renders data into the page 
function renderData(Obj, ID) {
    let htmlString = ""
    Obj.forEach((data) => {
        htmlString += ` 
            <div class="sight-listings"> 
                <p>Location: <span class="highlight">${data.location}</span></p> 
                <p>timestamp: <span class="highlight">${data.timeStamp}</span></p> 
                <p>Title: <span class="highlight">${data.title}</span></p> 
                <p>Details: ${data.text}</p>
            </div>
        `
    })
    document.getElementById(`${ID}`).innerHTML = htmlString
}



// calling all the function 
Sights() 
