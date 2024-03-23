fetch('e68f4fc7136ec12bfeb833e681ce8f32')
.then(response => response.json())
.then(data => {
    const moviesContainer = document.getElementById('movies');
    data.results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <div class="title">${movie.title}</div>
        `;
        moviesContainer.appendChild(movieElement);
    });
})
.catch(error => {
    console.error('Une erreur s\'est produite :', error);
});