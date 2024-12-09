import { clearUserData, setUserData, updateNav } from '../util.js'
import { get, post } from './request.js'

//TODO Adapt user profile to exam requirements (identity, extra properties, etc.)

const ednpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

export async function login(email, password) {

    const result = await post(ednpoints.login, { email, password })
    setUserData(result);
    updateNav();
};

export async function register(email, password) {
    const result = await post(ednpoints.register, { email, password });
    setUserData(result);
    updateNav();

};

export async function logout() {
    const promise = get(ednpoints.logout);
    clearUserData(); 

    await promise;
    updateNav();

}