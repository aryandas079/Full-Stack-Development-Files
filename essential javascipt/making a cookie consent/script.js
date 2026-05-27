// this is used to make the pop up appear after 3s of coming to the page 
setTimeout(function() {
    document.querySelector(".popup-container").style.display = "block"  
}, 1500) 

// making the close button work 
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup-container").style.display = "none"  
}) 

// now making the accept and reject buttons change position on hover 
document.querySelector("#reject-btn").addEventListener("mouseover", function() { 
    document.querySelector(".button-fields").classList.toggle("button-fields-reverse")
}) 

// taking data from the form 
const form = document.querySelector(".consent-form")
let formData
form.addEventListener("submit", function(event) {
    event.preventDefault()
    formData = new FormData(form)
}) 


// now making the accept button do the work 
document.getElementById("accept-btn").addEventListener("click", function() { 
    document.querySelector(".consent-form").style.display = "none"
    setTimeout(function() {
        document.getElementById("note-popup").innerHTML = `
            <img src="images/loading.svg" alt="loading screen" />
            <p>uploading your data on the dark web...</p>
        `
    }, 100)
    setTimeout(function() {
        document.getElementById("note-popup").innerHTML = `
            <img src="images/loading.svg" alt="loading screen" />
            <p>making the sale...</p>
        `
    }, 2500)
    setTimeout(function() {
        document.getElementById("note-popup").innerHTML = `
            <h3>
                Thanks
                <span style="color:#ff00ff; font-weight:700;">
                    ${formData.get("userName")}
                </span>, you sucker!
            </h3>
            <p>We just sold the rights to your eternal soul</p>
            <img src="images/pirate.gif" alt="gif of a laughing pirate" />
        `
    }, 4000) 
    // this piece of code below is used to make the disabled pop up form button enabled 
    document.querySelector(".close-btn").disabled = false  
}) 
