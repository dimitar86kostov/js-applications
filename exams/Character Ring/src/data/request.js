 import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const option = {
        method,
        headers: {}
    };

    if (data) {
        option.headers['Content-type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        option.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, option)
        
        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }

            const err = await response.json();
            throw new Error(err.message)
        }

        if (response.status == 204) {
            return response;
        }else{
            return response.json();
        }
    } catch (err) {
        //TODO add custom error handling and vizualization on exam requirements
        alert(err.message);
        throw err;
    }

}
export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);