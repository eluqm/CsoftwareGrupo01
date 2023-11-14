import { StyleSheet, View, Text, Image, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color';
import { useLogIn } from './../../Context/LogInContext';

export default function Header() {
    const { profile } = useLogIn();
    return (
        <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: 10,
                alignItems: 'center', paddingVertical: 10, backgroundColor: Color.appColor }}>

            <View>
                <TextInput placeholder='Search'
                    style = { styles.searchBar }
                />
            </View>

            <Image 
                source = {{ uri: profile.UrlImage }}
                style = { styles.userImage }
            />

        </View>
    );
};

var styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50
    },
    searchBar: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 4,
        borderRadius: 50,
        paddingLeft: 10,
        width: Dimensions.get('screen').width * 0.75,
        backgroundColor: Color.white,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
});