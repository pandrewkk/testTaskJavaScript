import {showDescription} from './description.js'
import {getStore} from "./store.js";
import {getDataForTable} from "./store.js";
import {addNewBook} from "./addNewBook.js";
import {sortTable} from "./sortTable.js";

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }

    const buttonRow = document.createElement('td');
    let addButton = document.createElement('button');
    addButton.onclick = function () {
        addNewBook();
    }
    addButton.textContent = 'Добавить';
    buttonRow.appendChild(addButton);
    row.appendChild(buttonRow);
}

export function generateTableBody(books) {
    const tbody = createTable.createTBody();
    for (let i = 0; i < books.length; i++) {
        let element = books[i];
        const row = tbody.insertRow();
        row.onclick = function() {
            showDescription(element.id);
        }
        const columns = getDataForTable();
        for (let j = 0; j < columns.length; j++) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[columns[j]]);
            cell.append(text);
        }
        const buttonRow = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.onclick = function (event) {
            event.stopPropagation();
            row.remove();
        }
        deleteButton.textContent = 'Удалить';
        buttonRow.appendChild(deleteButton);
        row.appendChild(buttonRow);
    }
}

const createTable = document.createElement('table');
createTable.classList.add('table-sortable');
const data = getDataForTable();
generateTableHead(createTable, data);
generateTableBody(getStore());
document.body.appendChild(createTable);
sortTable();