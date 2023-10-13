import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import Color from './App/Shared/Color';
import * as Location from 'expo-location';
import { UserLocationContext } from './App/Context/UserLocationContext';

export default function App() {
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

  return (
    <View style = {styles.container}>
      <UserLocationContext.Provider value = {{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    paddingTop: 0
  },
});
