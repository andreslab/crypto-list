import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import List from '../components/List/List';
import { getCoinsApi } from '../api/Coin'
import UserGreeting from "../components/Auth/UserGreeting";
import useAuth from "../hooks/useAuth";
import { addCoinsStorage, getCoinsStorage } from '../db/Coin';
import Filter from '../components/List/Filter';


export default function Home() {

    const { auth, coinsFilter, setTotalCoins } = useAuth();
    const [coinsShowed, setCoinsShowed] = useState([]);

    useEffect(() => {
        (async () => {
            await loadCoins();
        })();
    }, [coinsFilter]); //dentro de [] va algun parametro que indica, si se modifica ese valor se vuelva a ejecutar toda la funcion del useEffect



    const loadCoins = async () => {
        if (coinsFilter.length > 0) {
            console.log(`coin filte: ${coinsFilter[0].price_usd}`);
            setCoinsShowed(coinsFilter);
            return;
        }
        try {
            const response = await getCoinsApi();
            const collectionCoins = [];
            for await (const coin of response.data) {
                if (coin.rank > 50) { break; }
                collectionCoins.push({
                    id: coin.id,
                    symbol: coin.symbol,
                    name: coin.name,
                    nameid: coin.nameid,
                    rank: coin.rank,
                    price_usd: coin.price_usd,
                    percent_change_24h: coin.percent_change_24h,
                    percent_change_1h: coin.percent_change_1h,
                    percent_change_7d: coin.percent_change_7d,
                    price_btc: coin.price_btc,
                    market_cap_usd: coin.market_cap_usd,
                    volume24: coin.volume24,
                    volume24a: coin.volume24a,
                    csupply: coin.csupply,
                    tsupply: coin.tsupply,
                    msupply: coin.msupply
                });
            }
            setTotalCoins(collectionCoins);
            setCoinsShowed(collectionCoins);
            //setCoins([...coins, ...collectionCoins]);
            addCoinsLocal(collectionCoins);
        } catch (error) {
            console.log("local:");
            HandleTrySomethingFailure();
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <View>{auth ? <UserGreeting name={auth.firstName} /> : <Text>Welcome</Text>}</View>
            <Filter />
            <ActivityIndicator style={{
                width: '100%',
                top: '200px',
                position: "absolute"
            }} size="large" />
            <View style={{
                backgroundColor: "#eceff1"
            }}>
                <List
                    coins={coinsShowed}
                />
            </View>
        </SafeAreaView>
    );

    async function addCoinsLocal(coins) {
        await addCoinsStorage(coins)
    }

    async function getCoinsLocal() {
        return await getCoinsStorage()
    }

    async function HandleTrySomethingFailure() {
        try {
            const collectionCoins = await getCoinsLocal();
            setTotalCoins(collectionCoins);
            setCoinsShowed(collectionCoins);
        } catch (IndexOutOfRangeException) {
            console.error(error);
        }
    }
}