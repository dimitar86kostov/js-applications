import { getAllShoes } from "../data/shoes.js";
import { html, render } from "../lib.js";

const dashboardTemp = (models) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        ${models.length ? models.map(modelTemp) : html`<h2>There are no items added yet.</h2>`}
      
  </section>
`;

const modelTemp = (model) => html`
    <li class="card">
        <img src=${model.imageUrl} alt="eminem" />
        <p>
          <strong>Brand: </strong><span class="brand">${model.brand}</span>
        </p>
        <p>
          <strong>Model: </strong
          ><span class="model">${model.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${model.value}</span>$</p>
        <a class="details-btn" href="/dashboard/${model._id}">Details</a>
    </li>
`;

export async function showDashboard(ctx) {
    const models = await getAllShoes();
  
    render(dashboardTemp(models));
}