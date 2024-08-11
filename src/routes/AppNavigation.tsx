import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNavigation from "./TabNavigation";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator()

export default function AppNavigation(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="TabNavigation" component={TabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}