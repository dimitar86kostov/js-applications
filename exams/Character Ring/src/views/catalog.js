import { html, render } from "../lib.js";
import { getAllCharacters } from "../data/data.js";

const catalogTemp = (chars) => html`
<h2>Characters</h2>
  <section id="characters">
  
    ${chars.length ? chars.map(charTemp)
    : html`
    <h2>No added Heroes yet.</h2>`}
    
  </section>
`;

const charTemp = (char) => html`
<div class="character">
      <img src=${char.imageUrl} alt="example3" />
      <div class="hero-info">
        <h3 class="category">${char.category}</h3>
        <p class="description">${char.moreInfo}</p>
        <a class="details-btn" href="/catalog/${char._id}">More Info</a>
      </div>`;

export async function showCatalog(ctx) {
  const chars = await getAllCharacters();
  render(catalogTemp(chars));
  
}