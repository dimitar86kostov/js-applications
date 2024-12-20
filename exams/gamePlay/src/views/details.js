import { deleteGame, getGameById } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";


const detailsTemp = (game, isOwner, onDelete) => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                    ${game.summary}
                </p>

                ${isOwner ? html`
                <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
                </div>` : null}

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                
            </div>

           

</section>
`;

export async function showDetails(ctx) {

    const id = ctx.params.id;

    const game = await getGameById(id);
    const user = await getUserData();
    console.log(user);
    
    const hasUser = !!user;
    const isOwner = hasUser && user._id == game._ownerId

    render(detailsTemp(game, isOwner, onDelete));


    async function onDelete() {
        const choice = confirm("Are you sure?");
        if (choice) {
          await deleteGame(id);
          page.redirect('/catalog')
        }
      }
}

// < !--Bonus( for Guests and Users) -->
//     <div class="details-comments">
//         <h2>Comments:</h2>
//         <ul>
//             <!-- list all comments for current game (If any) -->
//             <li class="comment">
//                 <p>Content: I rate this one quite highly.</p>
//             </li>
//             <li class="comment">
//                 <p>Content: The best game.</p>
//             </li>
//         </ul>
//         <!-- Display paragraph: If there are no games in the database -->
//         <p class="no-comment">No comments.</p>
//     </div>


// <!-- Bonus -->
// <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
// <article class="create-comment">
//     <label>Add new comment:</label>
//     <form class="form">
//         <textarea name="comment" placeholder="Comment......"></textarea>
//         <input class="btn submit" type="submit" value="Add Comment">
//     </form>
// </article>