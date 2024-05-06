import { logout } from './data/users.js';
import { page } from './lib.js';
import { updateNav } from './util.js';
import { showDashboard } from './views/dashboard.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

updateNav();

page('/', showHome);
page('/dashboard', showDashboard);
page('/login', showLogin);
page('/register', showRegister);

page.start();

document.getElementById("logoutBtn").addEventListener("click", async () =>{
    await logout();
    updateNav();

    page.redirect('/');
})

