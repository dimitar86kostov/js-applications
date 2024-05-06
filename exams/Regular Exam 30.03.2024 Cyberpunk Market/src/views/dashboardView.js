import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";

const dashboardTemp = (data) => html`
  <h3 class="heading">Market</h3>
  ${data ? dashboardDataTemp(data) : html`<h3 class="empty">No Items Yet</h3>`}
`;

const dashboardDataTemp = (data) => html`
<section id="dashboard">
    ${data.map(item => cardTemp(item))};
</section>
`;

const cardTemp = (item) => html`
<div class="item">
      <img src="../../${item.imageUrl}" alt="example1" />
      <h3 class="model">${item.item}</h3>
      <div class="item-info">
        <p class="price">${item.price}</p>
        <p class="availability">${item.availability}</p>
        <p class="type">${item.type}</p>
      </div>
      <a class="details-btn" href="/details/${item._id}">Uncover More</a>
    </div>
    
`;

export async function showDashboardView() {
    const data = await getAllItems()
    render(dashboardTemp(data));
}