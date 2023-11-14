import { StyleSheet, View, Text, Button, Image, Pressable, Dimensions } from 'react-native'
import Color from './../Shared/Color';
import React, { useContext } from 'react';
import { useLogIn } from './../Context/LogInContext';


export default function Profile() {
    const { setIsLoggedIn, setProfile } = useLogIn();
    const { profile } = useLogIn();

    const LogInForm = () => {
        setIsLoggedIn(false);
    };

    return (
        <View style = { styles.container }>
            <Image 
                source = {{ uri: profile.UrlImage }}
                style = { styles.userImage }
            />

            <Text style = { styles.userName } >{ profile.UserName }</Text>
            
            <Text style = { styles.email } >{ profile.Email }</Text>

            <Pressable onPress = { LogInForm }>
                {({pressed}) => (
                    <Text style = { !pressed ? styles.logOut : styles.logOutPressed }> Log Out </Text>
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
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    userName: {
        color: Color.black,
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    email: {
        color: Color.black,
        fontSize: 20,
        marginVertical: 10,
    },
    logOut: {
        marginTop: 30,
        backgroundColor: Color.red,
        borderWidth: 2,
        borderColor: Color.red,
        width: Dimensions.get('screen').width * 0.75,
        paddingVertical: 10,
        borderRadius: 25,
        color: Color.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    logOutPressed: {
        marginTop: 30,
        backgroundColor: Color.redPressed,
        borderWidth: 2,
        borderColor: Color.red,
        width: Dimensions.get('screen').width * 0.75,
        paddingVertical: 10,
        borderRadius: 25,
        color: Color.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});