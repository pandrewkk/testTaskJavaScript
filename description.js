import {getBookById} from "./store.js";

export function showDescription(id) {
    const book = getBookById(id);

    const title = document.createElement('p');
    title.textContent = book.title;
    title.classList.add('title');

    const author = document.createElement('p');
    author.textContent = book.author;
    author.classList.add('author');

    const genre = document.createElement('p');
    genre.textContent = book.genre;
    genre.classList.add('genre');

    const year = document.createElement('p');
    year.textContent = book.year;
    year.classList.add('year');

    const description = document.createElement('p');
    description.textContent = book.description;
    description.classList.add('description');

    const image = document.createElement('img');
    image.src = book.cover;

    const table = document.querySelector('table');
    const descriptionBook = document.createElement('div');

    descriptionBook.append(title, author, genre, year, description, image);
    table.replaceWith( descriptionBook );
    descriptionBook.classList.add('descriptionBook');
    let backButton = document.createElement('button');
    backButton.onclick = function () {
        descriptionBook.replaceWith(table);
    }
    backButton.textContent = 'Назад';
    descriptionBook.append(backButton);
}