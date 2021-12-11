import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-web';
import { getCoinDetailByIdApi } from '../api/Coin';


export default function Detail(props) {

    const {
        navigation,
        route: { params },
    } = props;
    const [coin] = useState(null);

    const collectionCoins = [];

    useEffect(() => {
        (async () => {
            await loadCoinDetail();
        })();
    }, [params]);

    const loadCoinDetail = async () => {
        try {
            const response = await getCoinDetailByIdApi("90");
            console.log(`response: ${response}`);
            // for await (const data of response.results) {
            //     console.log(`response: ${response}`);
            // }
        } catch (error) {
            console.error(error);
        }
    }

    if (!coin) return null;

    return (
        <ScrollView>
            <Text >{capitalize(coin.rank)}</Text>
        </ScrollView>
    )
}
