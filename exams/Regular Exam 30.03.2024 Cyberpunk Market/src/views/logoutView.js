import { logout } from "../data/users.js";
import { page } from "../lib.js";


export async function logoutView() {
    await logout(); 

    page.redirect("/");

}