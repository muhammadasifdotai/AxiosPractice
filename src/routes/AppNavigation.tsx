import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator()

export default function AppNavigation(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="TabNavigation" component={TabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}