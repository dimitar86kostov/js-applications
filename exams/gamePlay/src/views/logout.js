import { logout } from "../data/users.js"
import { page } from "../lib.js";


export const showLogout = async () => {
   await logout();
   page.redirect('/');
}