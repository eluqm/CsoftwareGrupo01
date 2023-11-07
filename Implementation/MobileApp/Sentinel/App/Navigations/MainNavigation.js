import { NavigationContainer } from '@react-navigation/native';
import React , { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//--
import { useLogIn } from './../Context/LogInContext';
import { UserLocationContext } from './../Context/UserLocationContext';
//--
import LogIn from './../Screens/LogIn';
import SignUp from './../Screens/SignUp';
import Welcome from './../Screens/Welcome';
import TabNavigation from './TabNavigation';

const MainNavigator = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (
            async () => {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
            
                const locationListener = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.High,
                    interval: 1000,
                    }, 
                    position => {
                        setLocation(position);
                        //console.log('=> ', position.coords, '\n');
                    }
                );
            
                return () => locationListener.unsubscribe();
            }
        )();
    }, [location]);

    const { isLoggedIn } = useLogIn();
    const Stack = createNativeStackNavigator();

    return isLoggedIn ? 
    (
        <UserLocationContext.Provider value = {{ location, setLocation }}>
            <TabNavigation/>
        </UserLocationContext.Provider>
    )
    : 

    (
        <Stack.Navigator initialRouteName = "Welcome">
            <Stack.Screen 
                name = "Welcome" 
                component = { Welcome } 
                options = {{ headerShown: false, }}
            />
            <Stack.Screen name = "LogIn" component = { LogIn } />
            <Stack.Screen name = "SignUp" component = { SignUp } />
        </Stack.Navigator>
    );
};

export default MainNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
});