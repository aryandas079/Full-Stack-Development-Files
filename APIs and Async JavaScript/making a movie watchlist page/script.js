// Footer 
const footer = document.querySelector(".footer-note") 
if (footer) { 
    footer.innerHTML =
    `Movie Watchlist &copy; ${new Date().getFullYear()}` 
}
// Variables
const submit = document.getElementById("submit")
const movieNameInput = document.getElementById("search")
const movieList = document.querySelector(".movie-list")
let watchArray = JSON.parse(localStorage.getItem("watchlist") || "[]")
let currentMovie = null

// Search movie 
if (submit) { 
    submit.addEventListener("click", async () => {
    const movieName = movieNameInput.value.trim()
    if (!movieName) return
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=4523fad1&t=${movieName}`
        )
        const data = await response.json()
        if (data.Response === "False") {
            movieList.innerHTML = `<p>Movie not found.</p>`
            return
        }
        renderMovie(data)
        movieNameInput.value = ""
    } catch (err) {
        console.error(err)
    }
})
}
// Render searched movie
function renderMovie(movie) {
    currentMovie = movie
    movieList.innerHTML = `
        <div class="movie-banner">
            <img src="${movie.Poster}" class="img" alt="${movie.Title}">
            <h2 class="tt">${movie.Title}</h2>
            <p class="rr">Rating: ${movie.imdbRating}</p>
            <p class="r-time">${movie.Runtime}</p>
            <p class="gg">${movie.Genre}</p>
            <button id="add-to">Watchlist</button>
            <p class="pp">${movie.Plot}</p>
        </div>
    `
}
// Render watchlist
function renderWatchlist(arr) {
    const container = document.querySelector(".watch-list")
    if (!container) return
    let htmlString = ""
    arr.forEach(movie => {
        htmlString += `
            <div class="movie-banner">
                <img src="${movie.Poster}" class="img" alt="${movie.Title}">
                <h2 class="ttw">${movie.Title}</h2>
                <p class="rrw">Rating: ${movie.imdbRating}</p>
                <p class="r-time-w">${movie.Runtime}</p>
                <p class="ggw">${movie.Genre}</p>
                <button class="remove" data-id="${movie.imdbID}">
                    Remove
                </button>
                <p class="ppw">${movie.Plot}</p>
            </div>
        `
    })
    container.innerHTML = htmlString
}
// Render saved watchlist on page load
renderWatchlist(watchArray)
// Add / Remove movie using event delegation
document.addEventListener("click", (event) => {
    // Add movie
    if (event.target.id === "add-to") {
        if (!currentMovie) return
        const exists = watchArray.some(
            movie => movie.imdbID === currentMovie.imdbID
        )
        if (!exists) {
            watchArray.push(currentMovie)
            localStorage.setItem(
                "watchlist",
                JSON.stringify(watchArray)
            )
            renderWatchlist(watchArray)
            alert("Movie added!")
        } else {
            alert("Movie already in watchlist!")
        }
    }

    // Remove movie
    if (event.target.classList.contains("remove")) {
        const movieId = event.target.dataset.id
        watchArray = watchArray.filter(
            movie => movie.imdbID !== movieId
        )
        localStorage.setItem(
            "watchlist",
            JSON.stringify(watchArray)
        )
        renderWatchlist(watchArray)
    }
}) 
