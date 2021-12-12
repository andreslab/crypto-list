import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function UserGreeting(props) {

    const { name } = props;

    return (
        <Text style={styles.greeting}>Welcome {name}</Text>
    )
}

const styles = StyleSheet.create({
    greeting: {
        marginLeft: 12,
        marginTop: 12,
        fontSize: 20
    }
});
