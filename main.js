
const arr = [{id: 1, author: 'Достоевский Ф. М.', title: 'Игрок', genre: 'Роман'}, {id: 2, author: 'Смолин А. П.', title: 'Ремонт эксковатора Э-505', genre: 'Пособие'}, {id: 3, author: 'Харари Ю.', title: 'Sapiens. Краткая история человечества', genre: 'Научпоп'}];
function showBooks(arr) {
    const tableBody = document.querySelector('.tbody');
    let tableRow = '';
    arr.forEach((book) => {
        tableRow += `<tr><td>${book.id}</td><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`;
    })
    tableBody.innerHTML = tableRow;
}

showBooks(arr);
