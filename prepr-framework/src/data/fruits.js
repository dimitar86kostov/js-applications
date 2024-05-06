import { del, get, post, put } from "./request.js";

const endpoints = {
    dashboard: '/data/fruits?sortBy=_createdOn%20desc',
    fruits: '/data/fruits',
    fruitById: '/data/fruits/'
}

export async function getAllFruits() {
    return get(endpoints.dashboard);
}

export async function getFruitById(id) {
    return get(endpoints.fruitById + id);
}

export async function createFruits({ name, imageUrl,  description,  nutrition}) {


    return post(endpoints.fruits, {
        name,
        imageUrl, 
        description, 
        nutrition
      });
}

export async function editFruits(id, data) {
    return put(endpoints.fruitById + id, data);
}

export async function deleteFruits(id) {
    return del(endpoints.fruitById + id);
}