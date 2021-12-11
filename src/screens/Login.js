import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native'
import LoginForm from '../components/Auth/LoginForm'

export default function Login() {

    const [text, onChangeText] = React.useState("Useless")

    return (
        <SafeAreaView>
            <LoginForm />
        </SafeAreaView>
    )
}
