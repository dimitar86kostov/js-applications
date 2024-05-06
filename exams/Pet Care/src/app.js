import { page } from './lib.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';


page('/', showHome);
page('/register', showRegister);
page('/login', showLogin);

page.start();
