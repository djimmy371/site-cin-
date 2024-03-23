// Fonction pour obtenir les détails d'un film
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

// Fonction pour afficher les films populaires
function displayPopularMovies() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e68f4fc7136ec12bfeb833e681ce8f32&language=fr-FR')
        .then(response => response.json())
        .then(data => {
            const moviesContainer = document.getElementById('movies');
            const upcommingMoviesContainer = document.getElementById('upcoming-movies-container');
            if (upcommingMoviesContainer) {
                data.results.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');

                    const img = document.createElement('img');
                    img.src = 'https://image.tmdb.org/t/p/w200' + movie.poster_path;
                    img.alt = movie.title;

                    const title = document.createElement('div');
                    title.classList.add('title');
                    title.textContent = movie.title;

                    movieElement.appendChild(img);
                    movieElement.appendChild(title);

                    const link = document.createElement('a');
                    link.href = '#'; // Mettez l'URL de la page de détails ici
                    link.addEventListener('click', () => displayMovieDetails(movie.id));
                    link.appendChild(movieElement);

                    upcommingMoviesContainer.appendChild(link);
                });
            } else {
                console.error('L\'élément upcoming-movies-container n\'a pas été trouvé');
            }
        })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la sélection des films a venir :', error);
            });
    }

// Fonction pour afficher les détails du film
function displayMovieDetails(movieId) {
    // Récupérer les détails du film
    getMovieDetails(movieId)
        .then(details => {
            if (details) {
                // Rediriger vers la page de détails du film avec les informations nécessaires
                window.location.href = `details.html?movieId=${details.id}`;
            }
        });
}

// Charger les films populaires au chargement de la page
window.onload = displayPopularMovies;



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

function getUserRatings(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/ratings?api_key=e68f4fc7136ec12bfeb833e681ce8f32`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des évaluations des utilisateurs :', error);
            return null;
        });
}

function displayMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    Promise.all([getMovieDetails(movieId), getUserRatings(movieId)])
        .then(([details, ratings]) => {
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

                    const userRating = document.createElement('p');
                    userRating.textContent = `Note moyenne des utilisateurs : ${ratings ? ratings.average : 'Non disponible'}`;

                    movieDetailsContainer.appendChild(img);
                    movieDetailsContainer.appendChild(title);
                    movieDetailsContainer.appendChild(description);
                    movieDetailsContainer.appendChild(userRating);
                } else {
                    console.error('L\'élément movie-details n\'a pas été trouvé.');
                }
            }
        });
}

// Charger les détails du film au chargement de la page
window.onload = displayMovieDetails;