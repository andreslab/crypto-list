import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import CoinCard from './CoinCard';

export default function CoinList(props) {

    const { coins } = props;

    return (
        <FlatList
            data={coins}
            showsVerticalScrollIndicator={false}
            keyExtractor={(coin) => coin.id}
            renderItem={({ item }) => <CoinCard coin={item} />}
            contentContainerStyle={styles.flatListContentContainer}
        />
    )
}


const styles = StyleSheet.create({
    flatListContentContainer: {
        marginTop: 30
    }
});