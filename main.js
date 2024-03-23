const apiKey = 'e68f4fc7136ec12bfeb833e681ce8f32';

function fetchUpcomingMovies() {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=e68f4fc7136ec12bfeb833e681ce8f32`;

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
    
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('p');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${movie.release_date}`;

        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);

        upcomingMoviesContainer.appendChild(movieDiv);
    });
}

fetchUpcomingMovies();
