import { getHomeGames } from "../data/events.js";
import { html, render } from "../lib.js";
// import { updateNav } from "../util.js";

const homeTemp = (games) => html`
<section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>

    <!-- Display div: with information about every game (if any) -->
    
    ${games.length ? games.map((game) => gameTemp(game)) : html`<p class="no-articles">No games yet</p>`}


    
</div>
</section>
`;

const gameTemp = (games) => html`
<div class="game">
        <div class="image-wrap">
            <img src=${games.imageUrl}>
        </div>
        <h3>${games.title}</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/catalog/${games._id}" class="btn details-btn">Details</a>
        </div>
</div>
`;

export async function showHome() {
    const games = await getHomeGames();
    render(homeTemp(games))
}