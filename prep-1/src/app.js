import { page } from './lib.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';



page('/', showHome);
page('/login', showLogin);

page.start();


