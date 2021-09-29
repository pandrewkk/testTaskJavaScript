import {addBook} from "./store.js";
import {getStore} from "./store.js";
import {generateTableBody} from "./main.js";


export function addNewBook() {
    let newBook = {id: '', author: '', title: '', genre: '', cover: '', year: '', description: ''};

    const table = document.querySelector('table');
    const addNewBook = document.createElement('div');
    addNewBook.classList.add('addNewBook');

    table.replaceWith(addNewBook);

    const textTitle = document.createElement('p');
    textTitle.textContent = 'Введите название';
    addNewBook.appendChild(textTitle);

    const inputTitle = document.createElement('input');
    inputTitle.classList.add('inputTitle');
    addNewBook.appendChild(inputTitle);

    const textAuthor = document.createElement('p');
    textAuthor.textContent = 'Введите автора';
    addNewBook.appendChild(textAuthor);

    const inputAuthor = document.createElement('input');
    inputAuthor.classList.add('inputAuthor');
    addNewBook.appendChild(inputAuthor);

    const textGenre = document.createElement('p');
    textGenre.textContent = 'Введите жанр';
    addNewBook.appendChild(textGenre);

    const inputGenre = document.createElement('input');
    inputGenre.classList.add('inputGenre');
    addNewBook.appendChild(inputGenre);

    const textYear = document.createElement('p');
    textYear.textContent = 'Введите год написания';
    addNewBook.appendChild(textYear);

    const inputYear= document.createElement('input');
    inputYear.classList.add('inputYear');
    addNewBook.appendChild(inputYear);

    const textDescription = document.createElement('p');
    textDescription.textContent = 'Введите описание';
    addNewBook.appendChild(textDescription);

    const inputDescription = document.createElement('input');
    inputDescription.classList.add('inputDescription');
    addNewBook.appendChild(inputDescription);

    const textCover = document.createElement('p');
    textCover.textContent = 'Введите ссылку на обложку';
    addNewBook.appendChild(textCover);

    const inputCover = document.createElement('input');
    inputCover.classList.add('inputCover');
    addNewBook.appendChild(inputCover);

    let backButton = document.createElement('button');
    backButton.classList.add('backButton');
    addNewBook.appendChild(backButton);
    backButton.textContent = 'Назад';
    backButton.onclick = function () {
        addNewBook.replaceWith(table);
    }

    let saveButton = document.createElement('button');
    saveButton.classList.add('saveButton');
    addNewBook.appendChild(saveButton);
    saveButton.textContent = 'Сохранить';
    saveButton.onclick = function () {
        newBook.id = getStore().length + 1;
            newBook.author = document.querySelector('.inputAuthor').value;
        newBook.title = document.querySelector('.inputTitle').value;
        newBook.genre = document.querySelector('.inputGenre').value;
        newBook.cover = document.querySelector('.inputCover').value;
        newBook.year = document.querySelector('.inputYear').value;
        newBook.description = document.querySelector('.inputDescription').value;
        addBook(newBook);
        addNewBook.replaceWith(table);
        generateTableBody([newBook]);
    }


}