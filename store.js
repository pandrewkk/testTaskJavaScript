const dataBooks = [
    {id: 1, author: 'Достоевский Ф. М.', title: 'Игрок', genre: 'Роман', cover: 'assets/image1.jpg', year: '1866', description: 'История азарта, ставшего для человека уже не смыслом игры и даже не смыслом жизни, но единственной, экзистенциальной сутью бытия'},
    {id: 2, author: 'Смолин А. П.', title: 'Ремонт эксковатора Э-505', genre: 'Пособие', cover: 'assets/image2.jpg', year: '1958', description: 'В книге описана конструкция экскаватора Э-505 и сменного рабочего оборудования с указанием изменений, введенных заводом в конструкцию экскаваторов Э-505'},
    {id: 3, author: 'Харари Ю.', title: 'Sapiens. Краткая история человечества', genre: 'Научпоп', cover: 'assets/image3.jpg', year: '2011', description: 'Юваль Харари показывает , как ход истории формировал человеческое общество и действительность вокруг него.'}
];

export function getStore() {
    return dataBooks;
}

export function getBookById(id) {
    return dataBooks.filter((item) => item.id === id)[0];
}

export function addBook(book) {
    dataBooks.push(book);
}

export function getDataForTable() {
    let b = {}
    b.id = true;
    b.author = true;
    b.title = true;
    b.genre = true;
    b.cover = false;
    b.year = true;
    b.description = false;

    let keys = Object.keys(b);
    let values = Object.values(b);

    let result = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i]) {
            result.push(keys[i]);
        }
    }

    return result;

}