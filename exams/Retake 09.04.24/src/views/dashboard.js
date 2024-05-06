import { getAllSolutions } from '../data/solutions.js';
import { html, render } from '../lib.js';

const dashboardTemp = (solutions) => html`
 <h2>Solutions</h2>
        <section id="solutions">
          ${solutions.length ? solutions.map(solutionTemp) : html`<h2 id="no-solution">No Solutions Added.</h2>`}
        </section>
`;

const solutionTemp = (solution) => html`
<div class="solution">
      <img src=${solution.imageUrl} alt="example3" />
          <div class="solution-info">
            <h3 class="type">${solution.type}</h3>
              <p class="description">${solution.description}</p>
            <a class="details-btn" href="/dashboard/${solution._id}">Learn More</a>
          </div>
  </div>
`;

export async function showDashboard(ctx) {
    const solutions = await getAllSolutions();
    render(dashboardTemp(solutions))

}