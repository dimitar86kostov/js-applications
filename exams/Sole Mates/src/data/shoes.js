import { get, post, put, del } from './request.js';

const endpoints = {
    dashboard: "/data/shoes?sortBy=_createdOn%20desc",
    shoes: "/data/shoes",
    modelbyId: "/data/shoes/"
};

export async function getAllShoes() {
    return get(endpoints.dashboard);
}

export async function getModelById(id) {
    return get(endpoints.modelbyId + id)
}

export async function addPair({ brand, model, imageUrl, release, designer, value }) {
    return post(endpoints.shoes, {
        brand,
        model,
        imageUrl,
        release,
        designer,
        value
    });
}

export async function updateModel(id, data) {
    return put(endpoints.modelbyId + id, data);
}

export async function deleteModel(id) {
    return del(endpoints.modelbyId + id);
}