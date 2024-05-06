import { sellItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const sellTemp = (handler) => html`
<section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form @submit=${handler} class="create-form">
        <input type="text" name="item" id="item" placeholder="Item" />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export function showSellView() {
  const handler = createSubmitHandler(onsubmit);
  render(sellTemp(handler));
};

async function onsubmit(data, form) {

  const {
    item,
    imageUrl,
    price,
    availability,
    type,
    description
  } = data;

  if (!item || !imageUrl || !price || !availability || !type || !description) {
    return window.alert('All fields are required!!!');
  };

  await sellItem(data);

  page.redirect('/dashboard');
}