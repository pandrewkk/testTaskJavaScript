import {showDescription} from './description.js'

const dataBooks = [
    {id: 1, author: 'Достоевский Ф. М.', title: 'Игрок', genre: 'Роман', cover: 'assets/image1.jpg', year: '1866', description: 'История азарта, ставшего для человека уже не смыслом игры и даже не смыслом жизни, но единственной, экзистенциальной сутью бытия'},
    {id: 2, author: 'Смолин А. П.', title: 'Ремонт эксковатора Э-505', genre: 'Пособие', cover: 'assets/image2.jpg', year: '1958', description: 'В книге описана конструкция экскаватора Э-505 и сменного рабочего оборудования с указанием изменений, введенных заводом в конструкцию экскаваторов Э-505'},
    {id: 3, author: 'Харари Ю.', title: 'Sapiens. Краткая история человечества', genre: 'Научпоп', cover: 'assets/image3.jpg', year: '2011', description: 'Юваль Харари показывает , как ход истории формировал человеческое общество и действительность вокруг него.'}
];

function generateTableHead(table, tbody, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);

    }

    const row1 = document.createElement('td');
    let btm = document.createElement('button');
    btm.id='cm5';
    btm.onclick = function (event) {
        let newBook = {id: '', author: '', title: '', genre: '', cover: '', year: '', description: ''};
        newBook.id = dataBooks.length + 1,
        newBook.author = prompt('Как зовут автора?', 'Пушкин А. С.'),
        newBook.title = prompt('Как называется произведение?', 'Евгений Онегин'),
        newBook.genre = prompt('Жанр этого произведения?', 'Роман'),
        newBook.cover = prompt('Предоставьте URL ссылку для обложки', 'https://azbukivedia.ru/wa-data/public/shop/products/70/53/25370/images/63605/63605.750x0.jpg'),
        newBook.year = prompt('В каком году было написано?', '1830'),
        newBook.description = prompt('Запишите описание произведения', 'Вечный роман о несбывшейся любви великого классика мировой литературы А.С Пушкина'),
        dataBooks.push(newBook);
        console.log(dataBooks);
        const row = tbody.insertRow();
        tableRows.push(row);
        const key = Object.keys(newBook);
        for (let j = 0; j < 4; j++) {
            let cell = row.insertCell();
            let text = document.createTextNode(newBook[key[j]]);
            cell.append(text);
        }
        const row1 = document.createElement('td');
        let btm = document.createElement('button');
        btm.onclick = function (event) {
            event.stopPropagation();
            tableRows[newBook.id - 1].remove();
        }
        btm.textContent = 'Удалить';
        row1.appendChild(btm);
        row.appendChild(row1);

        showDescription(tableRows, dataBooks);

    }
    btm.textContent = 'Добавить';
    row1.appendChild(btm);
    row.appendChild(row1);
}

function showBooks(tbody, books) {
    for (let i = 0; i < books.length; i++) {
        let element = books[i];
        const row = tbody.insertRow();
        tableRows.push(row);
        let key = Object.keys(element);
        for (let j = 0; j < 4; j++) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key[j]]);
            cell.append(text);
        }
        const row1 = document.createElement('td');
        let btm = document.createElement('button');
        btm.onclick = function (event) {
            event.stopPropagation();
            tableRows[i].remove();
        }
        btm.textContent = 'Удалить';
        row1.appendChild(btm);
        row.appendChild(row1);
    }
}

const tableRows = [];
const root = document.querySelector('body');
const createTable = document.createElement('table');
createTable.classList.add('table-sortable');
const createTBody = createTable.createTBody();
const data = ['id', 'Автор', 'Название', 'Жанр']
generateTableHead(createTable, createTBody, data);
showBooks(createTBody, dataBooks);
root.appendChild(createTable);
showDescription(tableRows, dataBooks);

function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }


    tBody.append(...sortedRows);

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});
