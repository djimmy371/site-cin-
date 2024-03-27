const apiKey = 'e68f4fc7136ec12bfeb833e681ce8f32';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjhmNGZjNzEzNmVjMTJiZmViODMzZTY4MWNlOGYzMiIsInN1YiI6IjY1ZmIyNTExMDQ3MzNmMDE0YWU1ZDU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIxo5MWsUoNO8gZPBs663OUwBcZnp-gmTSHIM0bzhkM';

// function fetchUpcomingMovies() {
//     const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=fr-FR&session_id=${accessToken}`;

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch upcoming movies');
//             }
//             return response.json();
//         })
//         .then(data => {
//             displayUpcomingMovies(data.results);
//         })
//         .catch(error => {
//             console.error('Error fetching upcoming movies:', error);
//         });
// }

// function displayUpcomingMovies(movies) {
//     const upcomingMoviesContainer = document.getElementById('upcoming-movies');
//     upcomingMoviesContainer.innerHTML = ''; // Clear previous content
    
//     if (!movies || movies.length === 0) {
//         upcomingMoviesContainer.textContent = 'Aucun film à venir trouvé.';
//         return;
//     }

//     movies.forEach(movie => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movie');

//         const title = document.createElement('p');
//         title.textContent = movie.title;

//         const releaseDate = document.createElement('p');
//         releaseDate.textContent = `Date de sortie : ${movie.release_date}`;

//         const poster = document.createElement('img');
//         if (movie.poster_path) {
//             poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
//             poster.alt = movie.title;
//         } else {
//             poster.src = 'placeholder-image-url.jpg'; // Default image URL if no image available
//             poster.alt = 'Image non disponible';
//         }

//         movieDiv.appendChild(poster);
//         movieDiv.appendChild(title);
//         movieDiv.appendChild(releaseDate);

//         upcomingMoviesContainer.appendChild(movieDiv);
//     });
// }

// function fetchHorrorMovies() {
//     const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch horror movies');
//             }
//             return response.json();
//         })
//         .then(data => {
//             displayHorrorMovies(data.results);
//         })  
//         .catch(error => {
//             console.error('Error fetching horror movies:', error);
//         });

// }

// function displayHorrorMovies(movies) {
//     const horrorMoviesContainer = document.getElementById('horror-movies');
//     horrorMoviesContainer.innerHTML = ''; // Clear previous content
//     if (!movies || movies.length === 0) {
//         horrorMoviesContainer.textContent = 'Aucun film d\'horreur.';
//         return;
//     }
    
//     movies.forEach(movie => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movie', 'horror-movie'); // Ajoutez une classe spécifique

//         const title = document.createElement('p');
//         title.textContent = movie.title;

//         const releaseDate = document.createElement('p');
//         releaseDate.textContent = `Date de sortie : ${movie.release_date}`;

//         const poster = document.createElement('img');
//         if (movie.poster_path) {
//             poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
//             poster.alt = movie.title;
//         } else {
//             poster.src = 'placeholder-image-url.jpg'; // Default image URL if no image available
//             poster.alt = 'Image non disponible';
//         }

//         // Ajouter les éléments au conteneur principal
//         movieDiv.appendChild(poster);
//         movieDiv.appendChild(title);
//         movieDiv.appendChild(releaseDate);

//         horrorMoviesContainer.appendChild(movieDiv);
//     });

function fetchPopularMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch popular movies');
            }
            return response.json();
        })
        .then(data => {
            displayPopularMovies(data.results);
        })
        .catch(error => {
            console.error('Error fetching popular movies:', error);
        });
}

function displayPopularMovies(movies) {
    const popularMoviesContainer = document.getElementById('popular-movies');
    popularMoviesContainer.innerHTML = ''; // Clear previous content
    if (!movies || movies.length === 0) {
        popularMoviesContainer.textContent = 'Aucun film populaire.';
        return;
    }

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie', 'popular-movie'); // Ajoutez une classe spécifique

        const title = document.createElement('p');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Date de sortie : ${movie.release_date}`;

        const poster = document.createElement('img');
        if (movie.poster_path) {
            poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            poster.alt = movie.title;
        } else {
            poster.src = 'placeholder-image-url.jpg'; // Default image URL if no image available
            poster.alt = 'Image non disponible';
        }

        // Ajouter les éléments au conteneur principal
        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);

        popularMoviesContainer.appendChild(movieDiv);
    });


    // Initialiser le carousel une fois que les éléments sont ajoutés
    $('.slick-carousel-popular').slick({
        slidesToShow: 3, // Nombre de films à afficher à la fois
        slidesToScroll: 1, // Nombre de films à faire défiler à la fois
        autoplay: true, // Activer l'autoplay
        autoplaySpeed: 2000, // Vitesse de l'autoplay en millisecondes
    });
}





// Call the fetchUpcomingMovies function
window.addEventListener('DOMContentLoaded', (event) => {
    // fetchUpcomingMovies();
    // fetchHorrorMovies();
    fetchPopularMovies();

});
