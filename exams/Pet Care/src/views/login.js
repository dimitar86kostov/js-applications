import { login } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemp = (onLogin) => html`
<section id="loginPage">
    <form class="loginForm" @submit=${onLogin}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>
`;

export function showLogin() {
    render(loginTemp(createSubmitHandler(onLogin)));
}

async function onLogin(data, form) {
    const {email, password} = data;

    if (!email || !password) {
        return alert("All fields are required!");
    }

    await login(email, password);
    page.redirect('/');
}