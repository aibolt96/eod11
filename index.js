const message = document.querySelector('#message')

const addMovie = (event) =>{
    event.preventDefault();
    const inputField = document.querySelector('input');
    inputValue = inputField.value;
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputValue
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    const movieList = document.querySelector('ul');
    movieList.appendChild(movie);
    inputField.value = '';
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = 'Movie Watched!'
    } else (message.textContent = 'Movie added back.')
}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie)