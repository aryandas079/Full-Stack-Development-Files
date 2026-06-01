document.querySelector("footer").innerHTML = `
            <p>&copy; color picker ${new Date().getFullYear()}</p>
`

document.getElementById("submit-btn").addEventListener("click", () => { 
    const color = document.getElementById("color").value.slice(1)
    const selectedValue = document.getElementById("dropdown").value 
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${selectedValue}&count=5`) 
        .then(response => response.json()) 
        .then(data => { 
            renderColor(data)
        })
}) 

function renderColor(value) { 
    let htmlString = ""
            value.colors.forEach((color) => {
               htmlString += ` 
                <div class="color-container">
                    <div
                    class="color-block"
                    style="background-color: ${color.hex.value}">
                </div>
                <p class="hex-code" style="text-decoration: underline dotted grey;">${color.hex.value}</p>
            </div>            
        `  
            });
    document.querySelector(".display-colors").innerHTML = htmlString
} 

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("hex-code")) {
        navigator.clipboard.writeText(event.target.textContent);

        alert("Copied!");
    }
}); 

