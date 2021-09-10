const books = [
    {id: 1, author: 'Достоевский Ф. М.', title: 'Игрок', genre: 'Роман'},
    {id: 2, author: 'Смолин А. П.', title: 'Ремонт эксковатора Э-505', genre: 'Пособие'},
    {id: 3, author: 'Харари Ю.', title: 'Sapiens. Краткая история человечества', genre: 'Научпоп'}
];

const table = document.querySelector("table");

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

showBooks(table, books);
