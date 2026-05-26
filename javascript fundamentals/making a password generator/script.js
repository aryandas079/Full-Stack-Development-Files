let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 

let passone = document.querySelector("#passone") 
let passtwo = document.querySelector("#passtwo") 
let numsym = document.querySelector("#num-sym") 
let password1 = "" 
let password2 = "" 

function generatePass() {
    password1 = "" 
    password2 = "" 
    let number = prompt("length of password?") 
    if (number > 20){
        alert("password length <= 20")
    } else if (number >=8 ) {
        for (let i = 0; i < number; i++) { 
            let char = Math.floor(Math.random() * characters.length) 
            password1 += characters[char]
        } 
        for (let i = 0; i < number; i++) {
            let char = Math.floor(Math.random() * characters.length) 
            password2 += characters[char]
        } 
        passone.innerText = password1 
        passtwo.innerText = password2 

    } else {
        alert("minimum length of password is 8")
    } 
} 

function textCopy(value) {
    let finalPassword = [password1, password2] 
    navigator.clipboard.writeText(finalPassword[value]) 
    alert("Password copied!") 
} 
