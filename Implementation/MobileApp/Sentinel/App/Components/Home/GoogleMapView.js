import { StyleSheet, View, Button, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Circle, Polyline, Marker } from 'react-native-maps';
import Color from '../../Shared/Color';
import { UserLocationContext } from '../../Context/UserLocationContext';
import "react-native-url-polyfill/auto"
import { Supabase } from '../../../lib/Supabase';
//import Sound from 'react-native-sound';
import { Audio } from 'expo-av'

function calcularDistancia(lat1,lon1,lat2,lon2)
{
  rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000; 
  return d ; 
  }


export default function GoogleMapView() {
    const [sound, setSound] = React.useState();

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('./../../../assets/emergency-alarm.mp3'));
        setSound(sound);
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound? () => {
            sound.unloadAsync();
        } : undefined;
    }, [sound]);

    //playSound();

    const coordinates = { latitude: -16.396623642472864,  longitude: -71.5079767411299 };
    const policeLocation = { latitude: -16.399494477956868,  longitude: -71.50671502706446 };
    const securityLocation = { latitude: -16.401975103977186,   longitude: -71.5063475865762 };

    const coordinates2 = [
        { latitude: -16.39939068168573, longitude: -71.50637075203085 },
        { latitude: -16.399436167891437, longitude: -71.5056538341287 },
        { latitude: -16.39947983463509, longitude: -71.50557417659547 },
        { latitude: -16.398846665850336, longitude: -71.50447604043674 }
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
                longitudeDelta: 0.005
            });

            setMyLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        }
        else {
            setMyLocation({
                latitude: -16.397591243235873,
                longitude: -71.50415966156503,
            });
        }
    }, [location]);

    //SUPABASE
    
    const [ posts, setPosts ] = useState([]);

    const [ DangerAreas, setDangerAreas ] = useState([]);

    const GetCoords = async () => {
        let { data, error } = await Supabase
        .from('Coordinate')
        .select('latitude, longitude')

        return data;
    }

    const handleCirclePress = (dangerArea) => {
        Alert.alert('Círculo tocado', '¡Has tocado el círculo!');
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await Supabase.from('Coordinate').select('*');
            if(error) console.log(error);
            else setPosts(data);
        };
        fetchPosts();
        
        //GetCoords().then((data) => setPosts(data))
    }, []);
    
    var i = 0;
    
    useEffect(() => {
        const fetchDangerAreas = async () => {
            
            const { data, error } = await Supabase.from('DangerArea').select('*');
            if(error) console.log(error);
            else {
                setDangerAreas(data);
                console.log('data:: ', data[i]);
                data.map((dangerarea) => {
                    var distance = calcularDistancia(dangerarea.latitude, dangerarea.longitude, myLocation.latitude, myLocation.longitude);

                    if (distance + dangerarea.radius <= 1000) {
                        console.log("El usuario está cerca.");
                        playSound();
                    } 
                    else {
                        //console.log("El usuario no está cerca.");
                    }
            })
                
                
            }
        };
        //playSound();
        fetchDangerAreas();
        
    }, []);
    
    //console.log(posts);

    return (
        <View>
            <MapView 
                style = { styles.map } 
                provider = { PROVIDER_GOOGLE } 
                showsUserLocation = { true }
                region = { mapRegion }

                onPress={(event) => {
                    console.log(event)
                    /*DangerAreas.map(zone => {
                        console.log(zone)
                        alert(zone.id)
                    })*/
                }}
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

                {
                    DangerAreas.map((dangerArea) => (
                        <Circle
                            center = {{ latitude: dangerArea.latitude, longitude: dangerArea.longitude }}
                            radius = { dangerArea.radius }
                            strokeColor = { Color.red }
                            fillColor = "rgba(255, 0, 0, 0.25)"
                            strokeWidth = { 1 }
                            key = { dangerArea.id }
                        />

                    ))
                }

                <Polyline
                    coordinates = { coordinates2 }
                    strokeColor = { Color.red }
                    strokeWidth = { 5 }
                />

                <Polyline
                    coordinates = { posts }
                    strokeColor = "#FF5500"
                    strokeWidth = { 3 } 
                    lineDashPattern = { [0,0] }
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