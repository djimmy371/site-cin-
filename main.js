const apiKey = 'e68f4fc7136ec12bfeb833e681ce8f32';

function fetchUpcomingMovies(apiKey) {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Extraction de la partie de la date au format YYYY-MM-DD
    const encodedDate = encodeURIComponent(formattedDate); // Encodage de la date pour inclure dans l'URL
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&primary_release_date.gte=${encodedDate}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayUpcomingMovies(data.results);
        })
        .catch(error => {
            console.error('Error fetching upcoming movies:', error);
        });
}
function displayUpcomingMovies(movies) {
    const upcomingMoviesContainer = document.getElementById('upcoming-movies');
    upcomingMoviesContainer.innerHTML = ''; // Clear previous content
    
    if (!movies || movies.length === 0) {
        upcomingMoviesContainer.textContent = 'Aucun film à venir trouvé.';
        return;
    }

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('p');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${movie.release_date}`;

        const poster = document.createElement('img');
        if (movie.poster_path) {
            poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            poster.alt = movie.title;
        } else {
            poster.src = 'placeholder-image-url.jpg'; // URL de l'image par défaut si aucune image n'est disponible
            poster.alt = 'No Image Available';
        }

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);

        upcomingMoviesContainer.appendChild(movieDiv);
    });
}


fetchUpcomingMovies();
