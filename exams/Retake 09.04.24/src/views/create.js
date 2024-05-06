import { createSolution } from '../data/solutions.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

const createTemp = (onCreate) => html`
<section id="create">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Solution</h2>
            <form class="create-form" @submit=${onCreate}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
              ></textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
              ></textarea>
              <button type="submit">Add Solution</button>
            </form>
        </div>
</section>
`;

export function showCreate() {
    render(createTemp(createSubmitHandler(onCreate)));
}

async function onCreate(data, form) {

    const { type, imageUrl, description, learnMore } = data;


    if (type == '' || imageUrl == '' || description == "" || learnMore == "") {
        return alert("Invalid Info")
    }

    await createSolution(data);
    form.reset();
    page.redirect('/dashboard');
    updateNav();
}