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
    const listItem = event.target.parentNode;
    const movieTitle = listItem.querySelector('span').textContent
    event.target.parentNode.remove()
    message.textContent = `${movieTitle} removed from list`
    revealMessage();
}



const crossOffMovie = (event) => {
    const clickedMovie = event.target.textContent
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = `${clickedMovie} watched!`
    } else (message.textContent = `${clickedMovie} added back.`)
    revealMessage();
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(function() {
        message.classList.add('hide');
    }, 1000)
}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie)