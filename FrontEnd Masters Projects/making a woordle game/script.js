const body = document.querySelector("body")
const boxes = document.querySelectorAll(".box")
const attemptsInfo = document.getElementById("attempts-info")
const guessInfo = document.getElementById("guess-info")
const message = document.querySelector(".message")
const maxCol = 5
const maxRow = 6

let correctWord
let attempts = 6
let currentRow = 0
let currentCol = 0
let currentWord = []
let word = ""
let boolArr = []

body.addEventListener("keydown", async (event) => {
    const letter = event.key

    // setting up the keys
    if (/^[a-zA-Z]$/.test(letter) && currentCol < maxCol) {
        currentWord.push(letter.toUpperCase())
        let boxIndex = currentRow * 5 + currentCol
        boxes[boxIndex].textContent = currentWord[currentCol]
        currentCol++
    }
    if (letter === "Backspace" && currentCol > 0) {
        currentCol--
        currentWord.pop()
        let boxIndex = currentRow * 5 + currentCol
        boxes[boxIndex].textContent = ""
    }
    if (letter === "Enter" && currentCol === maxCol) {
        word = currentWord.join("")
        attempts--
        // making the attempts reflect on the screen
        attemptsInfo.innerHTML = `Attempts Left: ${attempts}`

        const data = await getWord()
        await check(data)

        for (let i = 0; i < 5; i++) {
            let boxIndex = currentRow * 5 + i

            if (boolArr[i] === true) {
                boxes[boxIndex].style.backgroundColor = "darkolivegreen"
                boxes[boxIndex].style.color = "whitesmoke"
            } else if (boolArr[i] === false) {
                boxes[boxIndex].style.backgroundColor = "crimson    "
                boxes[boxIndex].style.color = "whitesmoke"
            }
        }

        // Also making the guess statement
        const numberOfTrues = boolArr.filter(item => item === true).length
        guessInfo.innerHTML = `You have got ${numberOfTrues} letters of Correct Word`
        currentWord = []
        currentCol = 0

        // making the message
        if (numberOfTrues === 5) {
            message.innerHTML = `<div class="win">Hooray! You Won</div>`
        } else if (currentRow === maxRow - 1) {
            message.innerHTML = `<div class="lose">Correct Word: ${correctWord}</div>`
        } else {
            currentRow++
        }
    }
})


// this part below is just part of the fetch request
// now making the use of API calls
async function getWord() {
    try {
        const response = await fetch("https://words.dev-apis.com/word-of-the-day?random=1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// now making the check function
async function check(data) {
    boolArr = []
    correctWord = data.word.toUpperCase();
    for (let i = 0; i < 5; i++) {
        if (currentWord[i] === correctWord[i]) {
            boolArr.push(true)
        } else {
            boolArr.push(false)
        }
    }
}


