import { editSolution, getSolutionById } from '../data/solutions.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemp = (solution, onEdit) => html`
<section id="edit">
    <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
                .value=${solution.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${solution.imageUrl}

              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
                .value=${solution.description}
              ></textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
                .value=${solution.learnMore}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
    </div>
</section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
    const solution = await getSolutionById(id);
    render(editTemp(solution, createSubmitHandler(onEdit)));


    async function onEdit(data, form) {
    
        const { type, imageUrl, description, learnMore } = data;
    
    
        if (type == '' || imageUrl == '' || description == "" || learnMore == "") {
            return alert("Invalid Info")
        }
    
        await editSolution(id, data);
        page.redirect('/dashboard/' + id);
       
    }
}
