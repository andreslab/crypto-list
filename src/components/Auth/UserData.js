import React from 'react'
import { View, Text } from 'react-native'

export default function UserData(props) {

    const { name } = props;

    return (
        <Text>Bienvenido {name}</Text>
    )
}
