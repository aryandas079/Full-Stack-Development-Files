let home = document.getElementById("home-score") 
let guest = document.getElementById("guest-score") 
let lead = document.getElementById("lead") 

let scoreHome = 0 
let scoreGuest = 0 

function appendValueHome(value) {
    scoreHome += value 
    home.textContent = scoreHome 
    leadTeam() 
}
function appendValueGuest(value) {
    scoreGuest += value 
    guest.textContent = scoreGuest 
    leadTeam() 
} 

function leadTeam() {
    if (scoreHome > scoreGuest) {
        lead.textContent = "Lead Team: Home" 
    }
    else if (scoreHome < scoreGuest) {
        lead.textContent = "Lead Team: Guest" 
    } 
    else {
        lead.textContent = " "
    }
}

function newGame() {
    home.textContent = 0
    guest.textContent = 0 
    scoreHome = 0 
    scoreGuest = 0 
} 
