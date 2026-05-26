let countEL = document.getElementById("count-el") 
let saveEl = document.getElementById("save-el") 
let count = 0 
function increment() {
    count += 1 
    countEL.innerText = "Count: " + count  
} 
function save() {
    saveEl.innerText += " " + count + " - " 
    countEL.innerText = "Count: " +  0 
    count = 0
}