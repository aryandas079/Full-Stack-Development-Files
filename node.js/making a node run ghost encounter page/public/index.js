// making the footer get the live year  
if (document.getElementById("footer")) {
    document.getElementById("footer").textContent=
    `From the Other Side © ${new Date().getFullYear()} All Rights Reserved.` 
}


const form = document.getElementById("form") 
let formData = null
if (form) {
    formData = new FormData(form)
}



// this function is used to get data from the server via locally hosted API
async function Sights() { 
    if (!document.getElementById("sights")) return;
    const response = await fetch("/api", {
        method: "GET", 
        headers: {"Content-Type": "application/json"}, 
    }) 
    const dataObj = await response.json() 
    renderData(dataObj, "sights")
} 


// this function below is used to upload data to the server by locally hosted API 
document.addEventListener("submit", (event) => { 
    if (!form) return;
    event.preventDefault() 
    if (event.target !== form) return;
        async function uploadSights() { 
        const cryptoID = crypto.randomUUID()
        const body = { 
            uuid: cryptoID,
            location: formData.get("location"), 
            timeStamp: formData.get("datetime"), 
            title: formData.get("name"), 
            text: formData.get("text") 
        }
        const response = await fetch("", {
            method: "POST", 
            header: {"Content-Type": "application/json"}, 
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
            <div> 
                <p>Location: ${data.location}</p> 
                <p>timestamp: ${data.timeStamp}</p> 
                <p>Title: ${data.title}</p> 
                <p>Details: ${data.text}</p>
            </div>
        `
    }) 
    document.getElementById(`${ID}`).innerHTML = htmlString
} 



// calling all the function 
Sights() 
