import { login } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemp = (onLogin) => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onLogin}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export function showLogin() {
    render(loginTemp(createSubmitHandler(onLogin)));
}

async function onLogin({email, password}, form) {
    
    if (!email || !password) {
        return;
    }

    await login(email, password);
    page.redirect('/');
}