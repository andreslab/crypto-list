import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import useAuth from "../../hooks/useAuth";
import { COLOR_MAIN } from '../../utils/constants';

export default function Filter() {

    const { updateCoinList } = useAuth();
    const [filter, setFilter] = useState("");
    const [filterShowed, setFilterShowed] = useState("");

    return (
        <View >
            <Text style={{
                marginTop: 30,
                marginLeft: 12,
            }}>Filter:</Text>
            <View style={{
                marginTop: 5,
                flexDirection: 'row',
                marginLeft: 12,
                marginRight: 12
            }}>
                <TextInput
                    style={styles.filter}
                    inlineImageLeft='search_icon'
                    placeholder='Minimum 24-hr % Change'
                    autoCapitalize='none'
                    value={filter}
                    onChangeText={setFilter} />
                <Button
                    title="Filter"
                    style={styles.btn}
                    color={COLOR_MAIN}
                    onPress={(() => {
                        updateCoinList(filter);
                        setFilterShowed(filter);
                        setFilter("");
                    })}
                />
            </View>
            <Text style={{
                marginTop: 5,
                fontSize: 15,
                marginLeft: 12,
            }} >{filterShowed}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    btn: {
        flex: 0.5,
        color: COLOR_MAIN
    },
    filter: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
    }
});
