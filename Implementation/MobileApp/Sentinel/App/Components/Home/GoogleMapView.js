import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Circle, Polyline, Marker } from 'react-native-maps';
import Color from '../../Shared/Color';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function GoogleMapView() {
    const coordinates = { latitude: -16.402499981414643, longitude: -71.52939497860923, };
    var radius = 200;

    const coordinates2 = [
        { latitude: -16.405449072850647, longitude: -71.5330267985263 },
        { latitude: -16.40410885830579, longitude: -71.531422378344 }
    ];

    //------------------

    const [mapRegion, setMapRegion] = useState([]);
    
    const [myLocation, setMyLocation] = useState([]);
    
    const {location, setLocation} = useContext(UserLocationContext);

    useEffect(() => {
        if(location) {
            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });

            setMyLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        }
    }, [location]);
    
    console.log('aea', mapRegion);
    
    return (
        <View>
            <MapView 
                style = { styles.map } 
                provider = { PROVIDER_GOOGLE } 
                showsUserLocation = { true }
                region = { mapRegion }
            >
                <Marker title = "You" coordinate = { coordinates }>
                    <Image source={require('./../../../assets/you_icon.png')} style={{height: 25, width:25 }} />
                </Marker>

                <Circle
                    center = { coordinates }
                    radius = { radius }
                    strokeColor = { Color.red }
                    fillColor = "rgba(255, 0, 0, 0.25)"
                    strokeWidth = { 1 }
                />

                <Polyline
                    coordinates = { coordinates2 }
                    strokeColor = { Color.red }
                    strokeWidth = { 5 }
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});