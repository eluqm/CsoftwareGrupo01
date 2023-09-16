import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import List from '../Screens/List';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
    )
}