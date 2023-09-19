import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Circle, Polyline, Marker } from 'react-native-maps';
import Color from '../../Shared/Color';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function GoogleMapView() {
    const coordinates = { latitude: -16.396623642472864,  longitude: -71.5079767411299 };
    var radius = 200;

    const policeLocation = { latitude: -16.399494477956868,  longitude: -71.50671502706446 };
    const securityLocation = { latitude: -16.401975103977186,   longitude: -71.5063475865762 };

    const coordinates2 = [
        { latitude: -16.39939068168573, longitude: -71.50637075203085 },
        { latitude: -16.399436167891437, longitude: -71.5056538341287 },
        { latitude: -16.39947983463509, longitude: -71.50557417659547 },
        { latitude: -16.398846665850336, longitude: -71.50447604043674 }
    ];

    // 

    //------------------

    const [mapRegion, setMapRegion] = useState([]);
    
    const [myLocation, setMyLocation] = useState([]);
    
    const {location, setLocation} = useContext(UserLocationContext);

    useEffect(() => {
        if(location) {
            setMapRegion({
                latitude: location.coords.latitude - 0.002,
                longitude: location.coords.longitude - 0.002,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            });

            setMyLocation({
                latitude: location.coords.latitude - 0.002,
                longitude: location.coords.longitude - 0.002,
            });
        }
        else {
            setMyLocation({
                latitude: -16.400025937734114,
                longitude: -71.5065392349691,
            });
        }
    }, [location]);
    
    console.log('aea', myLocation);
    
    return (
        <View>
            <MapView 
                style = { styles.map } 
                provider = { PROVIDER_GOOGLE } 
                showsUserLocation = { true }
                region = { mapRegion }
            >
                <Marker title = "You" coordinate = { myLocation }>
                    <Image source = { require('./../../../assets/you_icon.png') } style = {{ height: 25, width:25 }} />
                </Marker>

                <Marker title = "Police" coordinate = { policeLocation }>
                    <Image source = { require('./../../../assets/police.png') } style = {{ height: 30, width:30 }} />
                </Marker>

                <Marker title = "Security" coordinate = { securityLocation }>
                    <Image source = { require('./../../../assets/security.png') } style = {{ height: 30, width:30 }} />
                </Marker>

                <Circle
                    center = { myLocation }
                    radius = { 15 }
                    strokeColor = { '#3B85FC' }
                    fillColor = "rgba(59, 133, 252, 0.25)"
                    strokeWidth = { 1 }
                />

                <Circle
                    center = { myLocation }
                    radius = { 5 }
                    strokeColor = { '#3B85FC' }
                    fillColor = "rgba(59, 133, 252, 1)"
                    strokeWidth = { 1 }
                />

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