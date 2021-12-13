import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { capitalize } from 'lodash';
import { useNavigation } from "@react-navigation/native";
import { COLOR_MAIN } from '../../utils/constants';


export default function Card(props) {
    const { coin } = props;
    const navigation = useNavigation();

    const goToDetail = () => {
        navigation.navigate("Detail", { id: coin.id });
    };

    const change24h = coin.percent_change_24h;
    const colorChange24h = change24h.includes("-") ? "#f50057" : "#1de9b6";

    return (
        <TouchableWithoutFeedback onPress={goToDetail}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View>
                        <Text style={styles.rank}>{capitalize(coin.rank)}</Text>
                        <Text style={styles.symbol}>{capitalize(coin.symbol)}</Text>
                        <Text style={styles.price}>{capitalize(coin.price_usd)}</Text>
                        <Text style={{
                            fontSize: 20,
                            position: "absolute",
                            top: 8,
                            right: 10,
                            color: colorChange24h,
                        }}
                        >
                            {capitalize(coin.percent_change_24h)} %</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 100,
    },
    spacing: {
        flex: 1,
        padding: 5,
        margin: 5,
        backgroundColor: COLOR_MAIN,
        borderRadius: 20,
    },
    rank: {
        position: "absolute",
        top: 8,
        left: 10,
        color: "#fff",
        fontSize: 20,
    },
    symbol: {
        fontSize: 28,
        marginLeft: 50,
        color: "#fff",
    },
    price: {
        fontSize: 16,
        marginLeft: 50,
        color: "#fff",
    },
});