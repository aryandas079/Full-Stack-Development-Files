// making the footer update with year in real time 
document.querySelector("footer").innerHTML = `CardWar&copy; ${new Date().getFullYear()}` 

// defining the variables 
const newDeck = document.getElementById("start-deck") 
const newCard = document.getElementById("draw-card") 
let remaining = document.getElementById("remaining") 
let deckId = "" 
let numberOfCards = 0 
let computerScore = 0 
let playerScore = 0 
let playerId = document.getElementById("player-id") 
let computerId = document.getElementById("computer-id") 

// now using the api key to get the cards shuffle option and intiate the deck 
newDeck.addEventListener("click", async () => { 
    const response = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1") 
    const data = await response.json() 
    deckId = data.deck_id 
    numberOfCards = data.remaining 
    remaining.textContent = `remaining: ${numberOfCards}` 
    newCard.disabled = false 
    document.querySelector(".cards-section").innerHTML = "" 
}) 

// now using the api key to draw two cards at once and showing them in DOM 
newCard.addEventListener("click", async () => { 
    if (!deckId) {
        alert("Create a deck first!")
        return
    }
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`) 
    const data = await response.json() 
    // update remaining count from API
    numberOfCards = data.remaining
    remaining.textContent = `remaining: ${numberOfCards}`

    // determine winner and update scores
    const initResult = calculateWin(data.cards[0], data.cards[1])

    // update score displays
    computerId.textContent = `Computer: ${computerScore}`
    playerId.textContent = `Player: ${playerScore}`

    // render cards with result
    renderCards(data, initResult) 

    // setting condition to disabled button and make user force to make a new deck 
    if (data.remaining <= 0 || data.success === false || data.cards.length < 2) { 
        newCard.disabled = true 
        if (computerScore > playerScore) { 
            document.querySelector(".initResult").textContent = "COMPUTER WINS THE MATCH" 
        }
        else if (computerScore < playerScore) { 
            document.querySelector(".initResult").textContent = "PLAYER WINS THE MATCH"  
        }
        else { 
            document.querySelector(".initResult").textContent = "MATCH TIED, GAME ON"  
        }
    }
}) 

// this is the function used to render the cards in the DOM 
function renderCards(value, result) { 
    document.querySelector(".cards-section").innerHTML = ` 
            <div class="cards-display"> 
                <img src="${value.cards[0].image}" aria-label="image of a ${value.cards[0].value} of ${value.cards[0].suit}" /> 
                <p class="initResult">${result}</p>
                <img src="${value.cards[1].image}" aria-label="image of a ${value.cards[1].value} of ${value.cards[1].suit}" /> 
            </div>
    `
}

// this is the function to check the win and loss logic 
function calculateWin(card1, card2) { 
    const valueArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"] 
    const valueCard1 = valueArr.indexOf(card1.value)
    const valueCard2 = valueArr.indexOf(card2.value) 
    // now checking the cases 
    // Assume card2 is Computer and card1 is Player
    if (valueCard1 < valueCard2) { 
        computerScore += 1 
        return "Computer wins this round"
    } else if (valueCard1 > valueCard2) { 
        playerScore += 1
        return "Player wins this round"
    } else { 
        return "It's a tie"
    }
} 
