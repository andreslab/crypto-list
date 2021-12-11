import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: "Login",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }} />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }} />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    tabBarLabel: "Detail",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }} />
        </Stack.Navigator>
    )
}
