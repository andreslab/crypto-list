import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import CoinList from '../components/CoinList';
import { getCoinsApi } from '../api/Coin'

const coins = [
    {
        id: "90",
        symbol: "BTC",
        name: "Bitcoin",
        nameid: "bitcoin",
        rank: 1,
        price_usd: "48417.68",
        percent_change_24h: "-1.10",
        percent_change_1h: "-0.14",
        percent_change_7d: "-8.57",
        price_btc: "1.00",
        market_cap_usd: "914525138151.23",
        volume24: 24306971214.651478,
        volume24a: 23104812156.585533,
        csupply: "18888246.00",
        tsupply: "18888246",
        msupply: "21000000"
    },
    {
        id: "80",
        symbol: "ETH",
        name: "Ethereum",
        nameid: "ethereum",
        rank: 2,
        price_usd: "4019.46",
        percent_change_24h: "-3.05",
        percent_change_1h: "-0.46",
        percent_change_7d: "-3.40",
        price_btc: "0.083013",
        market_cap_usd: "476576765062.53",
        volume24: 19625993101.107746,
        volume24a: 18568956147.69684,
        csupply: "118567231.00",
        tsupply: "118567231",
        msupply: ""
    },
    {
        id: "2710",
        symbol: "BNB",
        name: "Binance Coin",
        nameid: "binance-coin",
        rank: 3,
        price_usd: "553.51",
        percent_change_24h: "-5.27",
        percent_change_1h: "-0.08",
        percent_change_7d: "-4.80",
        price_btc: "0.011431",
        market_cap_usd: "92325475955.84",
        volume24: 1659803249.5214078,
        volume24a: 1432544780.310769,
        csupply: "166801148.00",
        tsupply: "192443301",
        msupply: "200000000"
    },
    {
        id: "518",
        symbol: "USDT",
        name: "Tether",
        nameid: "tether",
        rank: 4,
        price_usd: "1.00",
        percent_change_24h: "0.08",
        percent_change_1h: "-0.06",
        percent_change_7d: "-0.07",
        price_btc: "0.000021",
        market_cap_usd: "73715267100.02",
        volume24: 48268661087.66652,
        volume24a: 46423555449.05314,
        csupply: "73578322706.00",
        tsupply: "68261274250",
        msupply: ""
    },
    {
        id: "48543",
        symbol: "SOL",
        name: "Solana",
        nameid: "solana",
        rank: 5,
        price_usd: "169.15",
        percent_change_24h: "-5.43",
        percent_change_1h: "-1.04",
        percent_change_7d: "-17.11",
        price_btc: "0.003493",
        market_cap_usd: "51676589487.42",
        volume24: 1833234222.338021,
        volume24a: 1683164590.126053,
        csupply: "305506950.00",
        tsupply: "491561409.22682",
        msupply: "21000000"
    },
];

export default function Home() {

    const collectionCoins = [];

    useEffect(() => {
        (async () => {
            await loadCoins();
        })();
    }, []);

    const loadCoins = async () => {
        try {
            const response = await getCoinsApi();
            console.log(`response: ${response}`);
            // for await (const data of response.results) {
            //     console.log(`response: ${response}`);
            // }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView>
            <CoinList
                coins={coins}
            />
        </SafeAreaView>
    )
}
