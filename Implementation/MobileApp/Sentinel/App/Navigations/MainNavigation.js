import { NavigationContainer } from '@react-navigation/native';
import React , { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
//--
import { useLogIn } from './../Context/LogInContext';
import { UserLocationContext } from './../Context/UserLocationContext';
//--
import Home from './../Screens/Home';
import List from './../Screens/List';
import Welcome from './../Screens/Welcome';
import TabNavigation from './TabNavigation';

const MainNavigator = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
    
        const locationListener = await Location.watchPositionAsync({
          accuracy: Location.Accuracy.High,
          interval: 1000,
        }, position => {
          setLocation(position);
          console.log('=> ', position.coords);
        });
    
        return () => locationListener.unsubscribe();
      })();
    }, []);

    const { isLoggedIn } = useLogIn();
    return isLoggedIn ? 
    (
        <UserLocationContext.Provider value = {{ location, setLocation }}>
            <TabNavigation/>
        </UserLocationContext.Provider>
    )
    : 
    <Welcome/>;
};

export default MainNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
});