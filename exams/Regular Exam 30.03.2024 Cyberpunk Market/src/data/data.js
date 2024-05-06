import { del, get, post } from "./request.js";

const endpoints = {
    allItems: '/data/cyberpunk?sortBy=_createdOn%20desc',
    sellItem: '/data/cyberpunk'
}

export async function getAllItems() {
    return await get(endpoints.allItems);
}

export async function sellItem(data) {
    return await post(endpoints.sellItem, data);
}

export async function getItemById(id) {
    return await get(`${endpoints.sellItem}/${id}`);
}

export async function delItem(id) {
    return await del(`${endpoints.sellItem}/${id}`);
}