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
            if (moviesContainer) {
                data.results.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');

                    const img = document.createElement('img');
                    img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                    img.alt = movie.title;

                    const title = document.createElement('div');
                    title.classList.add('title');
                    title.textContent = movie.title;

                    movieElement.appendChild(img);
                    movieElement.appendChild(title);

                    // Créer un lien pour afficher les détails du film au clic
                    const link = document.createElement('a');
                    link.href = '#'; // Mettez l'URL de la page de détails ici
                    link.addEventListener('click', () => displayMovieDetails(movie.id));
                    link.appendChild(movieElement);

                    moviesContainer.appendChild(link);
                });
            } else {
                console.error('L\'élément movies n\'a pas été trouvé.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des films populaires :', error);
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
