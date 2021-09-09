var table = document.querySelector('.table');
var arr = [[1,2,3], [4,5,6], [7,8,9]];

fillTable(table, arr);

function fillTable(table, arr) {
    for (var i = 0; i < arr.length; i++) {
        var tr = document.createElement('tr');

        var td2 = document.createElement('td');
        td2.innerHTML = i+1;
        tr.appendChild(td2);
        for (var j = 0; j < arr[i].length; j++) {
            var td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}