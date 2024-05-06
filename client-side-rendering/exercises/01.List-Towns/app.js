import { html, render } from './node_modules/lit-html/lit-html.js'

const root = document.getElementById('root');

const form = document.querySelector('form').addEventListener('submit', btnHandler)

function btnHandler(e) {
    e.preventDefault();

    const dataForm = new FormData(e.target);
    const townList = dataForm.get('towns').split(", ");
    renderer(createTemp(townList))
}

function createTemp(towns) {
    return html`
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `;
}

function renderer(temp) {
    return  render(temp, root);
}

