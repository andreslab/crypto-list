import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Detail from '../screens/Detail';
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();


export default function Navigation() {
    const { logout } = useAuth();
    const navigation = useNavigation();

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#9fa8da',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen
                name="Log In"
                component={Login}

                options={{
                    tabBarLabel: "Login",
                }} />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    headerRight: () => (
                        <Button
                            onPress={() => {
                                logout()
                                navigation.goBack();
                            }}
                            title="Log out"
                            color="#9fa8da"

                        />
                    ),
                    headerLeft: null,
                    // headerStyle: {
                    //     backgroundColor: '#f4511e',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // },
                }} />
            < Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    tabBarLabel: "Detail",
                }} />
        </Stack.Navigator >
    )
}

const styles = StyleSheet.create({
    btn: {
        color: "#000"
    },
    bar: {
        color: "#9fa8da"
    }
});