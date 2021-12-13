import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-web';
import { getCoinDetailByIdApi } from '../api/Coin';
import { capitalize } from 'lodash';
import CoinChart from "../components/Chart";


export default function Detail(props) {

    const {
        route: { params },
    } = props;
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        (async () => {
            await loadCoinDetail();
        })();
    }, [params]);

    const loadCoinDetail = async () => {
        try {
            const response = await getCoinDetailByIdApi(params.id);
            //console.log(`response: ${response[0].rank}`);
            setCoin(response[0]);
        } catch (error) {
            console.error(error);
        }
    }

    if (!coin) return null;

    startCountDown()

    return (
        <ScrollView>
            <Text style={styles.symbol}>{capitalize(coin.symbol)}</Text>
            <CoinChart coin={coin} />
            <Text style={styles.change}>{capitalize(coin.percent_change_1h)}</Text>
        </ScrollView>
    )

    function startCountDown() {
        setInterval(callApi, 30000);
    }

    async function callApi() {
        console.log("call....");
        await loadCoinDetail();
    }
}


const styles = StyleSheet.create({
    symbol: {
        fontSize: 50,
        paddingLeft: 12
    },
    change: {
        fontSize: 25,
        position: "absolute",
        right: 10,
        top: 10
    },
});