const books = [
    {id: 1, author: 'Достоевский Ф. М.', title: 'Игрок', genre: 'Роман'},
    {id: 2, author: 'Смолин А. П.', title: 'Ремонт эксковатора Э-505', genre: 'Пособие'},
    {id: 3, author: 'Харари Ю.', title: 'Sapiens. Краткая история человечества', genre: 'Научпоп'}
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
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

const root = document.querySelector('body');
const createTable = document.createElement('table');
const data = ['id', 'Автор', 'Название', 'Жанр']
generateTableHead(createTable, data);
showBooks(createTable, books);
root.appendChild(createTable);

