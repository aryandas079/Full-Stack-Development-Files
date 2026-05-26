let textEl = document.getElementById("text-el")
const saveText = document.getElementById("save-text")  
const saveTab = document.getElementById("save-tab")  
const deleteBtn = document.getElementById("delete-text") 
let list = document.getElementById("ul-list") 

let saveTextList = JSON.parse(localStorage.getItem("inputValues")) || []
let saveTabList = JSON.parse(localStorage.getItem("tabValues")) || []

function renderAll() {
    list.innerHTML = ""
    listAppendText(saveTextList)
    listAppendTab(saveTabList)
}

renderAll()

// this is the set for the save input button functioning 
saveText.addEventListener("click", function() {
        saveTextList.push(textEl.value) 
        textEl.value = "" 
        localStorage.setItem("inputValues", JSON.stringify(saveTextList))
        renderAll()
}) 
function listAppendText(arr) { 
    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += `
            <li>${arr[i]}</li>
        `
    }
}


// this is the set for the save input button functioning 
saveTab.addEventListener("click", function() {
    chrome.tabs.query({active : true, currentWindow : true}, function(tabs) {
        saveTabList.push(tabs[0].url) 
        localStorage.setItem("tabValues", JSON.stringify(saveTabList))
        renderAll()
    }) 
})
function listAppendTab(arr) { 
    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += `
            <li><a href="${arr[i]}" target="_blank">${arr[i]}</a></li>
        `
    }
} 


// this are the other functions 
deleteBtn.addEventListener("click", function() {
    localStorage.clear() 
    list.innerHTML = ""
    saveTextList = []
    saveTabList = []
}) 
