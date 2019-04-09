'use strict';
console.log('scriptList linked');

    let list = JSON.parse(localStorage.getItem('list'));
    console.log(list);

    let html = `<div class="list-group">`;
    for(let student of list){
        html += `<a href="#" class="list-group-item list-group-item-action list-group-item-dark">${student.name}</a>`;
    }

    html += `</div>`;

    document.getElementById('list').innerHTML = html;
