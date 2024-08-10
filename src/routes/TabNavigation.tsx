import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import { SVG } from "../assets";

const Tab = createBottomTabNavigator()

export default function TabNavigation(): JSX.Element {
    return (
            <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'}}>
                <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                    tabBarIcon: ({color}) =>  <SVG.MaleIcon color={color}/>
                }}/>
                <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
                    tabBarIcon: ({color}) => <SVG.MaleIcon color={color} />
                }}/>
            </Tab.Navigator>
    )
}