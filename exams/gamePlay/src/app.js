// import { logout } from './data/users.js';
import { page } from './lib.js';
import { updateNav } from './util.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';

import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showLogout } from './views/logout.js';
import { showRegister } from './views/register.js';


updateNav();

page('/', showHome);
page('/register', showRegister);
page('/login', showLogin);
page('/catalog', showDashboard);
page('/create', showCreate);
page('/logout', showLogout);
page('/edit/:id', showEdit);
page('/catalog/:id', showDetails);

page.start();

