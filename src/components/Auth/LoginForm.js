import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { user } from '../../utils/userDB';

export default function LoginForm() {
    const [error, setError] = useState("");

    const navigation = useNavigation();
    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (data) => {
            setError("");
            const { username, password } = data;

            if (username !== user.username || password !== user.pass) {
                setError("Username or password invalid");
            } else {
                navigation.navigate("Home", { name: data.username });
            }
        }
    });

    return (
        <View>
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.label}>User</Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(user) => formik.setFieldValue('username', user)} />
            <Text style={styles.label}>Password</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder='Password'
                autoCapitalize='none'
                value={formik.values.password}
                onChangeText={(pass) => formik.setFieldValue('password', pass)} />
            <Button
                title="Log In"
                style={styles.button}
                onPress={formik.handleSubmit}
            />
            <Text style={styles.error}>{formik.errors.username || formik.errors.password || error}</Text>
        </View>
    )
}

function initialValues() {
    return {
        username: "",
        password: ""
    }
}

function validationSchema() {
    return {
        username: Yup.string().required("User required"),
        password: Yup.string().required("Pass required"),
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
    },
    label: {
        textAlign: "left",
        fontSize: 15,
        marginLeft: 12,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        marginHorizontal: 12,
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
    }
});