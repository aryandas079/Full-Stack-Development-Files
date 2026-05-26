let display = document.getElementById("display")

function appendValue(value) {
    if (display.textContent === "0") {
        display.textContent = value
    } else {
        display.textContent += value
    }
}

function clearDisplay() {
    display.textContent = 0 
} 

function del() {
    display.textContent = display.textContent.slice(0, -1)

    if (display.textContent === "") {
        display.textContent = "0"
    }
} 

function calculate() { 
    try {
        let expression = display.textContent.replace("%", "/100") 
        display.textContent = eval(expression) 
    } 
    catch {
        display.textContent = "Error"
    }
}
