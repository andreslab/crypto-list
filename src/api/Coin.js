import { API_HOST } from "../utils/constants";

export async function getCoinsApi() {
    try {
        const url = `${API_HOST}/api/tickers/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getCoinDetailByIdApi(id) {
    console.log(`id: ${id}`);
    try {
        const url = `${API_HOST}/api/ticker/`;
        const response = await fetch(`${url}?id=${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}