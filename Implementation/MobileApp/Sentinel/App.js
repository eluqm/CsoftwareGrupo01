import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import Color from './App/Shared/Color';

export default function App() {
  return (
    <View style = {styles.container}>
      <Image
        style = {{width: 100, height: 100}}
        source={require('./assets/logo.png')}
      />
      <Text style = {styles.text}>Sentinel Guard</Text>

      <StatusBar style="auto" />
      
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    paddingTop:20
  },
  text: {
    color: '#fff',
    fontSize: 50,
  },
});
