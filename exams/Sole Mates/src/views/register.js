import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";
import { register } from "../data/users.js";

const registerTemp = (onRegister) => html`
 <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="login-form" @submit=${onRegister}>
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
        <button type="submit">login</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`;

export async function showRegister(ctx) {
    render(registerTemp(createSubmitHandler(onRegister)));
}

export async function onRegister(data, form) {

    if (!data['email'] || !data['password']) {
       return alert("All fields are required!!!")
    }
    if (data['password'] != data['re-password']) {
      return alert("Password don/'t match!")
    }

    await register(data['email'], data['password']);
    updateNav();
    page.redirect('/')
}