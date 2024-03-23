// Fonction pour obtenir les détails d'un film en fonction de l'ID du film
function getMovieDetails(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e68f4fc7136ec12bfeb833e681ce8f32&language=fr-FR`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des détails du film :', error);
            return null;
        });
}

// Fonction pour afficher les détails du film
function displayMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    getMovieDetails(movieId)
        .then(details => {
            if (details) {
                const movieDetailsContainer = document.getElementById('movie-details');
                if (movieDetailsContainer) {
                    const img = document.createElement('img');
                    img.src = `https://image.tmdb.org/t/p/w200${details.poster_path}`;
                    img.alt = details.title;

                    const title = document.createElement('h1');
                    title.textContent = details.title;

                    const description = document.createElement('p');
                    description.textContent = details.overview;

                    movieDetailsContainer.appendChild(img);
                    movieDetailsContainer.appendChild(title);
                    movieDetailsContainer.appendChild(description);
                } else {
                    console.error('L\'élément movie-details n\'a pas été trouvé.');
                }
            }
        });
}

// Charger les détails du film au chargement de la page
window.onload = displayMovieDetails;
