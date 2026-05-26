let lengthEl = document.getElementById("length-el") 
let volumeEl = document.getElementById("volume-el") 
let massEl = document.getElementById("mass-el") 
let inputEl = document.getElementById("input-el") 
let enterEl = document.getElementById("enterEl")

// 1 m = 3.28084 ft 
// 1 L = 0.264172 gal 
// 1 kg = 2.20462 lb 

enterEl.addEventListener("click", function() {
    // length 
    lengthEl.textContent = `${Number(inputEl.value).toFixed(2)} meters = ${(Number(inputEl.value) * 3.28084).toFixed(2)} feet | ${(Number(inputEl.value)).toFixed(2)} feet = ${(Number(inputEl.value) * 0.3048).toFixed(2)} meters`
    // volume 
    volumeEl.textContent = `${Number(inputEl.value).toFixed(2)} litres = ${(Number(inputEl.value) * 0.264172).toFixed(2)} gallons | ${(Number(inputEl.value)).toFixed(2)} gallons = ${(Number(inputEl.value) * 3.7854125).toFixed(2)} litres`
    // mass 
    massEl.textContent = `${Number(inputEl.value).toFixed(2)} kilograms = ${(Number(inputEl.value) * 2.20462).toFixed(2)} pounds | ${(Number(inputEl.value)).toFixed(2)} pounds = ${(Number(inputEl.value) * 0.453592).toFixed(2)} kilograms`
}) 
