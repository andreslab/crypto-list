import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { user, userData, userDataAnonymous } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';
import { COLOR_MAIN } from '../../utils/constants';


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
            const { username } = data;

            if (username !== user.username) {
                setError("Username invalid");
            } else {
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
            <Button
                title="Log In"
                style={styles.button}
                color={COLOR_MAIN}
                onPress={formik.handleSubmit}
            />
            <Text style={styles.error}>{formik.errors.username || error}</Text>

            <Button
                title="Skip"
                style={styles.skip}
                color={COLOR_MAIN}
                onPress={() => {
                    login(userDataAnonymous);
                    navigation.navigate("Home");
                }}
            />
            <Text style={{
                color: "#b0bec5",
                fontSize: 20,
                textAlign: "center",
                marginTop: 20
            }}>Help: username = andres or just click in skip button</Text>
        </View >
    )
}

function goToHome(auth) {
    navigation.navigate("Home", { auth: auth });
}

function initialValues() {
    return {
        username: "",
    }
}

function validationSchema() {
    return {
        username: Yup.string().required("User required"),
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
        color: COLOR_MAIN
    },
    skip: {
        position: "absolute",
        bottom: 50,
        color: COLOR_MAIN
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
    }
});