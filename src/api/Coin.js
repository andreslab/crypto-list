import { API_HOST } from "../utils/constants";

const url = `${API_HOST}/api/tickers/`;

export async function getCoinsApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getCoinDetailByIdApi(id) {
    try {
        const response = await fetch(`${url}?id=${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}