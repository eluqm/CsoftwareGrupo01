import { StyleSheet, FlatList, View, Text, Image } from 'react-native'
import React from 'react'

export default function List() {

    const DATA = [
        {
            id: '1',
            name: 'Oscar Reynaldo Leon Laura',
            description: 'VIOLACIÓN SEXUAL DE MENOR DE EDAD',
            url: 'https://storage.googleapis.com/eltiempo/1/2022/12/homicidio-1.jpg'
        },
        {
            id: '1',
            name: 'Wilian Tedy Mayanchi Cruz',
            description: 'VIOLACIÓN SEXUAL DE MENOR DE EDAD',
            url: 'https://storage.googleapis.com/eltiempo/1/2022/12/choro.jpg'
        },
        {
            id: '1',
            name: 'Oscar Gutierrez Ahuanari',
            description: 'FEMINICIDIO',
            url: 'https://storage.googleapis.com/eltiempo/1/2022/12/Vargas-Mauricio.jpg',
        },
        {
            id: '1',
            name: 'Lenner Nike Taya Villafuerte',
            description: 'ROBO AGRAVADO',
            url: 'https://storage.googleapis.com/eltiempo/1/2022/12/violador-2.jpg',
        },
        {
            id: '1',
            name: 'Roman Alfredo Vellano Cordova',
            description: 'VIOLACIÓN SEXUAL DE MENOR DE EDAD',
            url: 'https://storage.googleapis.com/eltiempo/1/2022/12/carlos.jpg',
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data = { DATA }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style = { styles.container }>
                        <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
                        <View style={styles.item}>
                            <Text>{ item.name }</Text>
                            <Text>{ item.description }</Text>
                        </View>
                        
                    </View>
                )}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        flexDirection: 'row'
    },
    item: {
        padding: 10,
        fontSize: 20,
        margin: 'auto',
        alignItems: 'center'
    },
});