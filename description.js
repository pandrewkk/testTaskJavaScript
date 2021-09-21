export function showDescription(rows, books) {
    for (let i = 0; i < rows.length; i++){
        let row = rows[i];
        row.onclick = function() {
            const title = document.createElement('p');
            title.textContent = books[i].title;
            title.classList.add('title');

            const author = document.createElement('p');
            author.textContent = books[i].author;
            author.classList.add('author');

            const genre = document.createElement('p');
            genre.textContent = books[i].genre;
            genre.classList.add('genre');

            const year = document.createElement('p');
            year.textContent = books[i].year;
            year.classList.add('year');

            const description = document.createElement('p');
            description.textContent = books[i].description;
            description.classList.add('description');

            const image = document.createElement('img');
            let cover = books[i].cover;
            image.src  = cover;

            const table = document.querySelector('table');
            const descriptionBook = document.createElement('div');

            descriptionBook.append(title, author, genre, year, description, image);
            table.replaceWith( descriptionBook );
            descriptionBook.classList.add('descriptionBook');
        }
    }
}