import {showDescription} from './description.js'

const dataBooks = [
    {id: 1, author: 'Достоевский Ф. М.', title: 'Игрок', genre: 'Роман', cover: 'assets/image1.jpg', year: 1866, description: 'История азарта, ставшего для человека уже не смыслом игры и даже не смыслом жизни, но единственной, экзистенциальной сутью бытия'},
    {id: 2, author: 'Смолин А. П.', title: 'Ремонт эксковатора Э-505', genre: 'Пособие', cover: 'assets/image2.jpg', year: 1958, description: 'В книге описана конструкция экскаватора Э-505 и сменного рабочего оборудования с указанием изменений, введенных заводом в конструкцию экскаваторов Э-505'},
    {id: 3, author: 'Харари Ю.', title: 'Sapiens. Краткая история человечества', genre: 'Научпоп', cover: 'assets/image3.jpg', year: 2011, description: 'Юваль Харари показывает , как ход истории формировал человеческое общество и действительность вокруг него.'}
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function showBooks(table, books) {
    for (let element of books) {
        let row = table.insertRow();
        rows.push(row);
        let key = Object.keys(element);
        for (let i = 0; i < 4; i++) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key[i]]);
            cell.appendChild(text);
        }
    }
}

const rows = [];
const root = document.querySelector('body');
const createTable = document.createElement('table');
const data = ['id', 'Автор', 'Название', 'Жанр']
generateTableHead(createTable, data);
showBooks(createTable, dataBooks);
root.appendChild(createTable);
showDescription(rows, dataBooks);