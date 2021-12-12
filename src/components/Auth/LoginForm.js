import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { user, userData, userDataAnonymous } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';


export default function LoginForm() {
    const [error, setError] = useState("");
    const navigation = useNavigation();
    const { login } = useAuth();

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
                //goToHome(userData)
                login(userData);
                navigation.navigate("Home");
            }
        }
    });

    return (
        <View style={styles.content}>
            < Text style={styles.label} > User</Text >
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

            <Button
                title="Skip"
                style={styles.skip}
                onPress={() => {
                    login(userDataAnonymous);
                    navigation.navigate("Home");
                }}
            />
        </View >
    )
}

function goToHome(auth) {
    navigation.navigate("Home", { auth: auth });
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
    content: {
        marginTop: 12
    },
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
    skip: {
        position: "absolute",
        bottom: 50
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
    }
});