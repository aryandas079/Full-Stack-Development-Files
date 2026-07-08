const body = document.body
const time = document.querySelector('.time')

// Fetch a random landscape image and use it as the page background.
async function load() {
    const response = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=landscape")
    if (!response.ok) {
        throw new Error(`Image request failed: ${response.status}`)
    }
    const data = await response.json()
    body.style.backgroundImage = `url(${data.urls.regular})`
    body.style.backgroundSize = "cover"
    body.style.backgroundPosition = "center" 
    body.style.backgroundRepeat = "no-repeat"
}


time.textContent = new Date().toTimeString().slice(0,5)

load().catch(console.error) 

