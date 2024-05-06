import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const townsRoot = document.getElementById("towns");
const searchBox = document.getElementById("searchText");
const resultRoot = document.getElementById('result');

const nextBtn = searchBox.nextSibling.nextSibling.addEventListener('click', search)

update(null)

function update(towns, match) {
   render(ulTemp(towns, match), townsRoot);
}

function ulTemp(towns, match) {
   return html`
   <ul>${towns.map(town => createList(town, match?.includes(town)))}</ul>`;
}

function createList(town, isActive) {
   return html`
<li class=${isActive ? "active" : ""}>${town}</li>`
}

function search() {
   
   let searchText = searchBox.value;
   const match = towns.filter(town => town.includes(searchText));
   update(match);
   renderMatchCount(match.length);
}

function renderMatchCount(count) {
   render(html`${count} matches found`, resultRoot)
}
