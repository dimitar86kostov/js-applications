import { createSubmitHandler, updateNav } from '../util.js';
import { html, render, page } from '../lib.js';
import { register } from '../data/users.js';


const registerTemp = (onRegister) => html`
<section id="register">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Register</h2>
            <form class="register-form" @submit=${onRegister}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
</section>
`;

export function showRegister() {
    render(registerTemp(createSubmitHandler(onRegister)));
}


async function onRegister(data, form) {

    if (!data.email || !data.password) {
       return alert("AllFields are required!");
    }
    if (data.password !== data['re-password']) {
      return alert("Password don\'t match!")
    }

    await register(data.email, data.password);  
    page.redirect('/');
    updateNav();
}