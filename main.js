
const arr = [{author: 'Достоевский Ф. М.', title: 'Игрок', genre: 'Роман'}, {author: 'Смолин А. П.', title: 'Ремонт эксковатора Э-505', genre: 'Пособие'}, {author: 'Харари Ю.', title: 'Sapiens. Краткая история человечества', genre: 'Научпоп'}];
function showBooks(arr) {
    const tableBody = document.querySelector('.tbody');
    let tableRow = '';
    arr.forEach((book, index) => {
        tableRow += `<tr><td>${index + 1}</td><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`;
    })
    tableBody.innerHTML = tableRow;
}

showBooks(arr);
