import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { includes, pull } from 'lodash';
import { COIN_STORAGE } from "../utils/constants";

export async function getCoinsStorage() {
    try {
        const response = await AsyncStorageLib.getItem(COIN_STORAGE);
        return JSON.parse(response || []);
    } catch (error) {
        throw error;
    }
}

export async function addCoinsStorage(coins) {
    try {
        await AsyncStorageLib.setItem(COIN_STORAGE, JSON.stringify(coins));
    } catch (error) {
        throw error;
    }
}