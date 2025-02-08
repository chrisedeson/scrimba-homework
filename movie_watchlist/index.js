const MovieListEl = document.getElementById("movie-list");
const searchInputEl = document.getElementById("search-input");
const apiKey = "fd385fee"; // Vite-style env variable for Netlify

document.getElementById("search-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const searchInput = searchInputEl.value.trim();
    if (!searchInput) {
        alert("Please enter a movie name");
        return;
    }
    
    const api = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`;
    localStorage.setItem("lastSearch", searchInput);
    fetchAPIResult(api);
});

function fetchAPIResult(api) {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                MovieListEl.innerHTML = ''; 
                localStorage.setItem("lastSearchResults", JSON.stringify(data.Search));
                data.Search.forEach(movie => fetchMovieDetails(movie.imdbID));
            } else {
                MovieListEl.innerHTML = `
                    <div class="movie-unavailable">
                        <h2>Unable to find what you’re looking for. Please try another search</h2>
                    </div>
                `;
            }
        })
        .catch(error => console.error("Error fetching movie list:", error));
}

function fetchMovieDetails(imdbID) {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
        .then(response => response.json())
        .then(renderMovies)
        .catch(error => console.error("Error fetching movie details:", error));
}

function renderMovies(data) {
    const poster = data.Poster !== "N/A" ? data.Poster : "images/default-poster.webp";
    const watchlistArray = JSON.parse(localStorage.getItem("movieID")) || [];
    const isInWatchlist = watchlistArray.includes(data.imdbID);

    MovieListEl.innerHTML += `
        <div class="movie">
            <div class="poster-container">
                <img src="${poster}" alt="${data.Title} movie" loading="lazy">
            </div>
            <div class="movie-details">
                <div class="movie-title">
                    <h2>${data.Title}</h2>
                    <p><span class="star">&starf;</span> ${data.imdbRating}</p>
                </div>
                <div class="genre">
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <button data-watchlist="${data.imdbID}" aria-label="Add to Watchlist"
                        ${isInWatchlist ? "disabled" : ""}>
                        ${isInWatchlist ? "Added!" : "<span class='watchlist-btn-flicker'>+</span>Watchlist"}
                    </button>
                </div>
                <div class="plot">
                    <p class="plot-text truncate">${data.Plot}</p>
                    <a href="#" class="read-more invisible">Read more</a>
                </div>
            </div>
        </div>
    `;
    applyReadMoreFunctionality();
}

function applyReadMoreFunctionality() {
    document.querySelectorAll(".read-more").forEach((btn) => {
        const plotText = btn.previousElementSibling;
        const isTruncated = plotText.scrollHeight > plotText.clientHeight;
        btn.classList.toggle("invisible", !isTruncated);
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            plotText.classList.toggle("truncate");
            btn.textContent = plotText.classList.contains("truncate") ? "Read more" : "Read less";
        });
    });
}

document.addEventListener("click", function(event) {
    if (event.target.dataset.watchlist) {
        let watchlistArray = JSON.parse(localStorage.getItem("movieID")) || [];
        if (!watchlistArray.includes(event.target.dataset.watchlist)) {
            watchlistArray.push(event.target.dataset.watchlist);
        }
        localStorage.setItem("movieID", JSON.stringify(watchlistArray));
        event.target.textContent = "Added!";
        event.target.disabled = true;
    }
});

window.addEventListener("load", () => {
    const lastSearch = localStorage.getItem("lastSearch");
    const lastSearchResults = JSON.parse(localStorage.getItem("lastSearchResults"));
    if (lastSearch && lastSearchResults) {
        searchInputEl.value = lastSearch;
        MovieListEl.innerHTML = ''; 
        lastSearchResults.forEach(movie => fetchMovieDetails(movie.imdbID));
    }
});

function clearSearchResults() {
    localStorage.removeItem("lastSearch");
    localStorage.removeItem("lastSearchResults");
}
setInterval(clearSearchResults, 300000);
