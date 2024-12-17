const MovieListEl = document.getElementById("movie-list");
const searchInputEl = document.getElementById("search-input");

document.getElementById("search-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const searchInput = searchInputEl.value;
    const api = `http://www.omdbapi.com/?&apikey=fd385fee&s=${searchInput}`;

    // Save the search input to localStorage
    localStorage.setItem("lastSearch", searchInput);
    fetchAPIResult(api);
});

function fetchAPIResult(api) {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                MovieListEl.innerHTML = ''; // Clear the movie list before rendering

                // Save the fetched movie list to localStorage
                localStorage.setItem("lastSearchResults", JSON.stringify(data.Search));

                // Fetch detailed data for each movie
                for (const movie of data.Search) {
                    fetch(`http://www.omdbapi.com/?&apikey=fd385fee&i=${movie.imdbID}`)
                        .then(response => response.json())
                        .then((movieDetails) => {
                            renderMovies(movieDetails);
                        });
                }
            } else {
                MovieListEl.innerHTML = `
                    <div class="movie-unavailable">
                        <h2>Unable to find what you’re looking for. Please try another search</h2>
                    </div>
                `;
            }
        });
}

function renderMovies(data) {
    const poster = data.Poster !== "N/A" ? data.Poster : "images/default-poster.webp";

    // Retrieve the watchlist from local storage
    const watchlistArray = JSON.parse(localStorage.getItem("movieID")) || [];

    // Check if the movie is already in the watchlist
    const isInWatchlist = watchlistArray.includes(data.imdbID);

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
                    <button 
                        data-watchlist="${data.imdbID}" 
                        aria-label="Add to Watchlist"
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
    const readMoreBtns = document.querySelectorAll(".read-more");

    readMoreBtns.forEach((btn) => {
        const plotText = btn.previousElementSibling;

        // Check if the text is truncated
        function checkIfTruncated() {
            const isTruncated = plotText.scrollHeight > plotText.clientHeight;
            btn.classList.toggle("invisible", !isTruncated);
        }

        // Add click event for "Read more/Read less"
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            plotText.classList.toggle("truncate");
            btn.textContent = plotText.classList.contains("truncate")
                ? "Read more"
                : "Read less";
        });

        // Initial check
        checkIfTruncated();
        window.addEventListener("resize", checkIfTruncated);
    });
}

document.addEventListener("click", function(event) {
    if (event.target.dataset.watchlist) {
        // Retrieve existing watchlist from local storage or initialize as an empty array
        let watchlistArray = JSON.parse(localStorage.getItem("movieID")) || [];
        
        // Add the clicked movie ID to the array if it doesn't already exist
        if (!watchlistArray.includes(event.target.dataset.watchlist)) {
            watchlistArray.push(event.target.dataset.watchlist);
        }

        // Save the updated array back to local storage
        localStorage.setItem("movieID", JSON.stringify(watchlistArray));

        // Update button feedback
        event.target.textContent = "Added!";
        event.target.disabled = true;
    }
});

// Restore the previous state when the page loads
window.addEventListener("load", () => {
    const lastSearch = localStorage.getItem("lastSearch");
    const lastSearchResults = JSON.parse(localStorage.getItem("lastSearchResults"));

    if (lastSearch && lastSearchResults) {
        searchInputEl.value = lastSearch; // Restore the search input
        MovieListEl.innerHTML = ''; // Clear any existing content
        lastSearchResults.forEach(movie => {
            fetch(`http://www.omdbapi.com/?&apikey=fd385fee&i=${movie.imdbID}`)
                .then(response => response.json())
                .then((movieDetails) => {
                    renderMovies(movieDetails);
                });
        });
    }
});

// Function to clear search results from localStorage
function clearSearchResults() {
    localStorage.removeItem("lastSearch");
    localStorage.removeItem("lastSearchResults");
}

// Set a timer to clear search results every 5 minutes
setInterval(clearSearchResults, 300000); // 300000ms = 5 minutes

