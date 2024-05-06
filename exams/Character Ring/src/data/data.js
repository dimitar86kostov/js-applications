import { del, get, post, put } from "./request.js";

const endpoints = {
    'dashboard': '/data/characters?sortBy=_createdOn%20desc',
    'chars': '/data/characters',
    'charById': '/data/characters/'
}

export async function getAllCharacters() {
    return get(endpoints.dashboard);
}

export async function getCharById(id) {
    return get(endpoints.charById + id);
}

export async function createChar({ category, imageUrl, description, moreInfo }) {


    return post(endpoints.chars, {
        category,
        imageUrl,
        description,
        moreInfo
    });
}

export async function editChar(id, data) {
    return put(endpoints.charById + id, data);
}

export async function deleteChar(id) {
    return del(endpoints.charById + id);
}