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

document.addEventListener('DOMContentLoaded', function() {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjhmNGZjNzEzNmVjMTJiZmViODMzZTY4MWNlOGYzMiIsInN1YiI6IjY1ZmIyNTExMDQ3MzNmMDE0YWU1ZDU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIxo5MWsUoNO8gZPBs663OUwBcZnp-gmTSHIM0bzhkM'; // Remplacez 'YOUR_ACCESS_TOKEN' par votre jeton d'accès
    fetch(`https://api.themoviedb.org/3/account?api_key=e68f4fc7136ec12bfeb833e681ce8f32&session_id=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            const userId = data.id;
            fetch(`https://api.themoviedb.org/3/account/${userId}/rated/movies?api_key=YOUR_API_KEY&language=en-US&sort_by=created_at.asc`)
                .then(response => response.json())
                .then(data => {
                    const moviesContainer = document.getElementById('movies');
                    data.results.forEach(movie => {
                        const movieDiv = document.createElement('div');
                        movieDiv.classList.add('movie');
                        movieDiv.innerHTML = `
                            <h2>${movie.title}</h2>
                            <p>User Rating: ${movie.rating}</p>
                            <p>Rated At: ${movie.created_at}</p>
                        `;
                        moviesContainer.appendChild(movieDiv);
                    });
                })
                .catch(error => console.error(':', error));
        })
        .catch(error => console.error(':', error));
});
