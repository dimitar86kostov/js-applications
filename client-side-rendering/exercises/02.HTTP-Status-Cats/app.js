import { cats } from './catSeeder.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('allCats');

render(createCatList(cats), root);

function createCatList(cats){ 
    return html`
<ul>
    ${cats.map(cat => createTemp(cat))}
</ul>`;}

function createTemp(cat) { 
    return html`
    <li>
        <img src="./images/cat${cat.id}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
                <button @click=${onClick} class="showBtn">Show status code</button>
                <div class="status" style="display: none" id="100">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                </div>
        </div>
    </li>`;}

function onClick(e) {
    let curCat = e.target;
    
    if (curCat.textContent == "Show status code") {
        curCat.parentElement.children[1].style.display = "block";
        curCat.textContent = "Hide status code";

    }else if(curCat.textContent == "Hide status code"){
        curCat.parentElement.children[1].style.display = "none";
        curCat.textContent = "Show status code";
    }

}

