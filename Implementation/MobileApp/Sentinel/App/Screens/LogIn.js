import { StyleSheet, View, Text, Alert, Image, Pressable, Dimensions, TextInput } from 'react-native'
import React, { useContext } from 'react';
//--
import Color from './../Shared/Color';
import { useLogIn } from './../Context/LogInContext';
import { Supabase } from './../../lib/Supabase';

export default function LogIn({ navigation }) {
    const { setIsLoggedIn, setProfile } = useLogIn();
    const [email, onChangeEmail] = React.useState('kpachac@ulasalle.edu.pe');
    const [password, onChangePassword] = React.useState('123456789');

    const LogInSupabase = async () => {
            const { error } = await Supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
        
            if (error) {
                Alert.alert(error.message)
                setIsLoggedIn(false);
            }
            else {
                setIsLoggedIn(true);
            }
        };

    return (
        <View style = { styles.container }>
            <Image source = {require('./../../assets/logo.png')}
                style = { styles.logo }
            />

            <Text style = { styles.text } >Log In</Text>

            <TextInput 
                placeholder = 'Email' 
                placeholderTextColor = { Color.gray2 }
                cursorColor = { Color.black }
                style = { styles.userName }
                value = { email }
                onChangeText = { onChangeEmail }
            />

            <TextInput 
                placeholder = 'Password' 
                placeholderTextColor = { Color.gray2 }
                cursorColor = { Color.black }
                style = { styles.userName }
                secureTextEntry = { true }
                value = { password }
                onChangeText = { onChangePassword }
            />
        
            <Pressable 
                onPress = { LogInSupabase }
            >
                {({pressed}) => (
                    <Text style = { !pressed ? styles.signUp : styles.signUpPressed }>  Log In </Text>
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
        backgroundColor: Color.white,
    },
    logo: {
        width: 75,
        height: 75
    },
    text: {
        color: Color.black,
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    signUp: {
        marginTop: 40,
        backgroundColor: Color.appColor,
        borderWidth: 2,
        borderColor: Color.white,
        width: Dimensions.get('screen').width * 0.8,
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
        width: Dimensions.get('screen').width * 0.8,
        paddingVertical: 10,
        borderRadius: 25,
        color: Color.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    userName: {
        borderWidth: 1,
        borderColor: Color.gray,
        backgroundColor: Color.gray,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        fontSize: 15,
        width: Dimensions.get('screen').width * 0.8,
        marginTop: 15,
    },
});