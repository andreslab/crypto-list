import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import CoinList from '../components/CoinList';
import { getCoinsApi } from '../api/Coin'
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";


export default function Home() {

    const { auth } = useAuth();
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        (async () => {
            await loadCoins();
        })();
    }, []);

    //console.log(auth);

    const loadCoins = async () => {
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
            setCoins([...coins, ...collectionCoins]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <View>{auth ? <UserData name={auth.firstName} /> : <Text>Bienvenido</Text>}</View>
            <CoinList
                coins={coins}
            />
        </SafeAreaView>
    );
}
