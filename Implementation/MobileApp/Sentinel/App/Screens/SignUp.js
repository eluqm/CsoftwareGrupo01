import { StyleSheet, View, Text, Alert, Image, Pressable, Dimensions, TextInput } from 'react-native'
import React, { useContext } from 'react';
//--
import Color from './../Shared/Color';
import { Supabase } from './../../lib/Supabase';

export default function SignUp({ navigation }) {
    //const { setIsLoggedIn, setProfile } = useLogIn();
    const [userName, onChangeUserName] = React.useState('MyName');
    const [email, onChangeEmail] = React.useState('karlonaix@gmail.com');
    const [password, onChangePassword] = React.useState('123456789');
    const [repeatedPassword, onChangeRepeatedPassword] = React.useState('123456789');

    const SignUpSupabase = async () => {
        //navigation.navigate('GettingStarted');
        
        if (password != repeatedPassword) {
            Alert.alert('Passwords do not match')
            return;
        }

        const { data, error } = await Supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    userName: userName,
                    urlImage: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
                }
            }
        })
        if (error) {
            Alert.alert(error.message)
        }
        else {
            navigation.navigate('GettingStarted');
        }
    };

    return (
        <View style = { styles.container }>
            <Image source = {require('./../../assets/logo.png')}
                style = { styles.logo }
            />

            <Text style = { styles.text } >Sign Up</Text>

            <TextInput 
                placeholder = 'Username' 
                placeholderTextColor = { Color.gray2 }
                cursorColor = { Color.black }
                style = { styles.userName }
                autoCorrect = { true }
                value = { userName }
                onChangeText = { onChangeUserName }
            />

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

            <TextInput 
                placeholder = 'Repeat Password' 
                placeholderTextColor = { Color.gray2 }
                cursorColor = { Color.black }
                style = { styles.userName }
                secureTextEntry = { true }
                value = { repeatedPassword }
                onChangeText = { onChangeRepeatedPassword }
            />
        
            <Pressable onPress = { SignUpSupabase }>
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