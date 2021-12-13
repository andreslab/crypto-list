import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Card from './Card';

export default function List(props) {

    const { coins } = props;

    return (
        <FlatList
            data={coins}
            showsVerticalScrollIndicator={false}
            keyExtractor={(coin) => coin.id}
            renderItem={({ item }) => <Card coin={item} />}
            contentContainerStyle={styles.flatListContentContainer}
        />
    )
}


const styles = StyleSheet.create({
    flatListContentContainer: {
        marginTop: 30,
        backgroundColor: "#23000"
    }
});