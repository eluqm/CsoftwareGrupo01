import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
//--
import Home from '../Screens/Home';
import List from '../Screens/List';
import Profile from '../Screens/Profile';
import Color from '../Shared/Color';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen 
                name = "Home"
                component = { Home } 
                options = {{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="location" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen 
                name = "Criminals" 
                component = { List } 
                options = {{
                    tabBarLabel: 'Criminals',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name = "person-search" size = { 24 } color = "black" />
                    ),
                }}
            />
            <Tab.Screen 
                name = "Profile" 
                component = { Profile } 
                options = {{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name = "user" size = { 24 } color = "black" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: Color.appColor,
    },
});