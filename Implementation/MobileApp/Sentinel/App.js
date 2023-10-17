import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//--
import MainNavigator from './App/Navigations/MainNavigation';
import LogInProvider from './App/Context/LogInContext';
//--

export default function App() {

  return (
    <View style = {styles.container}>
      <StatusBar style='auto' />
      <LogInProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </LogInProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
});
