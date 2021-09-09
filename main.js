
const arr = [{author: 'name', title: 'a', genre: 'fiction'}, {author: 'name2', title: 'b', genre: 'comedy'}, {author: 'name3', title: 'c', genre: 'horror'}];
function showBooks(arr) {
    const tableBody = document.querySelector('.tbody');
    let tableRow = '';
    arr.forEach((book, index) => {
        tableRow += `<tr><td>${index + 1}</td><td>${book.author}</td><td>${book.title}</td><td>${book.genre}</td></tr>`;
    })
    tableBody.innerHTML = tableRow;
}

showBooks(arr);
