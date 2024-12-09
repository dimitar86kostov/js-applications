import { getAllGames } from "../data/events.js";
import { html, render } from "../lib.js";


const dashboardTemp = (games) => html`
<section id="catalog-page">
            <h1>All Games</h1>
            
            ${games.length ? games.map((game) => gameTemp(game)) : html`<h3 class="no-articles">No articles yet</h3>`}

            
</section>
`;

const gameTemp = (games) => html`
<div class="allGames">
                <div class="allGames-info">
                    <img src=${games.imageUrl}>
                    <h6>${games.category}</h6>
                    <h2>${games.title}</h2>
                    <a href="/catalog/${games._id}" class="details-button">Details</a>
                </div>
</div>
`;

export async function showDashboard() {
    const games = await getAllGames();
    render(dashboardTemp(games))
}