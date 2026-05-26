let message = document.querySelector("#message") 
let playerInfo = document.querySelector("#player-info")  
let sumEl = document.querySelector("#sum")
let cardsEl = document.querySelector("#cards")
let deck = []
for (let i = 1; i <= 13; i++) {
    deck.push(i)
}
let sum = 0
let game = false
let playerName = ""

function startGame() {
    if (game) {
        alert("You're already in a game")
        return
    }
    playerName = prompt("Enter your Name: ")
    playerInfo.textContent = playerName + ": $1000"
    sum = 0
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: 0"
    game = true
    alert("Game Started!")
}

function check() {
    if (sum < 21 && sum > 0) {
        message.textContent = "Not a Blackjack"
    } 
    else if (sum === 21) {
        message.textContent = "Blackjack!"
        game = false
        alert("You got Blackjack!")
    } 
    else if (sum > 21) {
        message.textContent = "You're out of game"
        game = false
        if (confirm("You lost. Start a new game?")) {
            newGame()
        }
    } 
    else {
        message.textContent = "Let's see your card skills"
    }
}

function newGame() {
    if (game) {
        alert("Finish current game first")
        return
    }
    sum = 0
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: 0"
    message.textContent = "Let's see your card skills"
    alert("New Game Ready")
}

function newCard() {
    if (!game) {
        alert("Start the game first")
        return
    }
    let drawCard = deck[Math.floor(Math.random() * deck.length)]
    sum += drawCard
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent += drawCard + " "
    check()
} 
