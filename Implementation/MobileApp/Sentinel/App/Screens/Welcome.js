import { StyleSheet, View, Text, Alert, Image, Pressable, Dimensions } from 'react-native'
import React, { useContext } from 'react';
//--
import Color from './../Shared/Color';

export default function Welcome({ navigation }) {
    return (
        <View style = { styles.container }>
            <Image source = {require('./../../assets/logo.png')}
                style = { styles.logo }
            />

            <Text style = { styles.text } >Welcome!</Text>

            <Pressable 
                onPress={() => {
                    navigation.navigate('LogIn')
                }}
            >
                {({pressed}) => (
                    <Text style = { !pressed ? styles.logIn : styles.logInPressed }> Log In </Text>
                )}
            </Pressable>
        
            <Pressable onPress={() => {
                navigation.navigate('SignUp')
            }}>
                {({pressed}) => (
                    <Text style = { !pressed ? styles.signUp : styles.signUpPressed }> Sign Up </Text>
                )}
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.appColor,
    },
    logo: {
        width: 150,
        height: 150
    },
    text: {
        color: Color.white,
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    logIn: {
        marginTop: 30,
        backgroundColor: Color.white,
        borderWidth: 2,
        borderColor: Color.white,
        width: Dimensions.get('screen').width * 0.75,
        paddingVertical: 10,
        borderRadius: 25,
        color: Color.black,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    logInPressed: {
        marginTop: 30,
        backgroundColor: Color.whitePressed,
        borderWidth: 2,
        borderColor: Color.white,
        width: Dimensions.get('screen').width * 0.75,
        paddingVertical: 10,
        borderRadius: 25,
        color: Color.black,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    signUp: {
        marginTop: 40,
        backgroundColor: Color.appColor,
        borderWidth: 2,
        borderColor: Color.white,
        width: Dimensions.get('screen').width * 0.75,
        paddingVertical: 10,
        borderRadius: 25,
        color: Color.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    signUpPressed: {
        marginTop: 40,
        backgroundColor: Color.appColorPressed,
        borderWidth: 2,
        borderColor: Color.white,
        width: Dimensions.get('screen').width * 0.75,
        paddingVertical: 10,
        borderRadius: 25,
        color: Color.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});