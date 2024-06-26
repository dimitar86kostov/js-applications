import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (onEdit) => html`
<section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
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
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
    ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`;

export function showEdit(ctx) {
    render(editTemp(createSubmitHandler(onEdit)))
}

async function onEdit({
    category,
    imageUrl,
    description,
    moreInfo
}, form) {

}