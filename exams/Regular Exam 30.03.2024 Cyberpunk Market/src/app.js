import { page } from './lib.js';
import { updateNav } from './util.js';
import { showDashboardView } from './views/dashboardView.js';
import { showDetailsView } from './views/detailsView.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { showRegisterView } from './views/registerView.js';
import { showSellView } from './views/sellView.js';


page('/', showHomeView);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', logoutView);
page('/dashboard', showDashboardView);
page('/sell', showSellView);
page('/dashboard', showDetailsView);


page.start();
updateNav();

