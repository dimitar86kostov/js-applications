import { getCharById } from "../data/data.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemp = (data, hasUser, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <div>
         <p id="details-category">${data.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
            <p id="description">
              ${data.description}
         </p>
             <p id ="more-info">
              ${data.moreInfo}
             </p>
            </div>
          </div>
         <h3>Is This Useful:<span id="likes">0</span></h3>

         ${hasUser ? html`
            <div id="action-buttons">

                ${ isOwner ? html`
                   <a href="" id="edit-btn">Edit</a>
                   <a href="" id="delete-btn">Delete</a>` : html`

                   <a href="" id="like-btn">Like</a>` }

            </div>`: null}
        </div>
    </div>
</section>
`;


export async function showDetails(ctx) {
    const id = ctx.params.id;
    const char = await getCharById(id);

    const user = getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == user._ownerId;

    render(detailsTemp(char, hasUser, isOwner));
}