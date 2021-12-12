import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { capitalize } from 'lodash';
import { useNavigation } from "@react-navigation/native";


export default function Card(props) {
    const { coin } = props;
    const navigation = useNavigation();

    const goToDetail = () => {
        navigation.navigate("Detail", { id: coin.id });
    };

    return (
        <TouchableWithoutFeedback onPress={goToDetail}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View>
                        <Text style={styles.rank}>{capitalize(coin.rank)}</Text>
                        <Text style={styles.symbol}>{capitalize(coin.symbol)}</Text>
                        <Text style={styles.price}>{capitalize(coin.price_usd)}</Text>
                        <Text style={styles.change}>{capitalize(coin.percent_change_1h)}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 100,
        color: "#f5f5f5",
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    rank: {
        position: "absolute",
        left: 5,
        top: 5,
        color: "#bdbdbd",
        fontSize: 11,
    },
    symbol: {
        fontSize: 30,
        paddingLeft: 50
    },
    price: {
        fontSize: 18,
        paddingLeft: 50
    },
    change: {
        fontSize: 14,
        position: "absolute",
        right: 10,
    },
});