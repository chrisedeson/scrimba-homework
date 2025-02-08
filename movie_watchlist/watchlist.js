const MovieListEl = document.getElementById("movie-list");

// Function to load and display the watchlist from localStorage
function loadWatchlist() {
    const watchlistArray = JSON.parse(localStorage.getItem("movieID")) || [];

    if (watchlistArray.length === 0) {
        emptyWatchListDisplayMessage()
        return;
    }

    MovieListEl.innerHTML = ""; // Clear previous content

    // Fetch movie details for each movie ID in the watchlist
    watchlistArray.forEach(movieID => {
        fetch(`https://www.omdbapi.com/?&apikey=fd385fee&i=${movieID}`)
            .then(response => response.json())
            .then(movieDetails => {
                renderWatchlistMovie(movieDetails);
            });
    });
}

// Function to render a movie in the watchlist
function renderWatchlistMovie(data) {
    const poster = data.Poster !== "N/A" ? data.Poster : "images/default-poster.webp";

    MovieListEl.innerHTML += `
        <div class="movie">
            <div class="poster-container">
                <img src="${poster}" alt="${data.Title} movie" loading="lazy">
            </div>
            <div class="movie-details">
                <div class="movie-title">
                    <h2>${data.Title}</h2>
                    <p>
                        <span class="star">&starf;</span> ${data.imdbRating}
                    </p>
                </div>
                <div class="genre">
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <button data-remove-watchlist="${data.imdbID}" aria-label="Remove from Watchlist">
                        <span class="watchlist-btn-flicker">-</span>Remove
                    </button>
                </div>
                <div class="plot">
                    <p>${data.Plot}</p>
                </div>
            </div>
        </div>
    `;
}

// Event listener to handle "Remove from Watchlist"
document.addEventListener("click", event => {
    if (event.target.dataset.removeWatchlist) {
        const movieID = event.target.dataset.removeWatchlist;
        let watchlistArray = JSON.parse(localStorage.getItem("movieID")) || [];

        // Remove the movie ID from the watchlist array
        watchlistArray = watchlistArray.filter(id => id !== movieID);

        // Save the updated watchlist back to localStorage
        localStorage.setItem("movieID", JSON.stringify(watchlistArray));

        // Remove the movie element directly from the DOM
        const movieEl = event.target.closest(".movie");
        if (movieEl) {
            movieEl.remove();
        }

        // If the watchlist becomes empty, show the empty message
        if (watchlistArray.length === 0) {
            emptyWatchListDisplayMessage()
        }
    }
});

function emptyWatchListDisplayMessage() {
    MovieListEl.innerHTML = `
            <div class="empty-watchlist movie-unavailable">
                <h2>Your watchlist is looking a little empty...</h2>
                <a href="index.html"><span class='watchlist-btn-flicker'>+</span>Let's add some movies</a href="index.html">
            </div>
        `;
}

// Load the watchlist when the page loads
window.addEventListener("load", () => {
    loadWatchlist();
});