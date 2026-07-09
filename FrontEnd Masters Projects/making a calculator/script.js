// selecting the entire body
const main = document.querySelector("main")
// selecting the display element
let display = document.getElementById("display")
display.innerText = ""
main.addEventListener("click", function (event) {
    const value = event.target.innerText
    if (clearFunction(value)) return
    if (deleteFunction(value)) return
    if (evaluateFunction(value)) return
    display.innerText += value.toString()
});

// setting up the evaluate function
function evaluateFunction(value) {
    if (value === "=") {
        let expression = display.innerText
            .replaceAll("×", "*")
            .replaceAll("÷", "/")
        display.innerText = Math.round(eval(expression) * 100) / 100;
        return true
    }
    return false
}

// setting up the delete function
function deleteFunction(value) {
    if (value === "⟵") {
        display.innerText = display.innerText.slice(0, -1)
        return true
    }
    return false
}

// setting up the clear function
function clearFunction(value) {
    if (value === "C") {
        display.innerText = ""
        return true
    }
    return false
}
