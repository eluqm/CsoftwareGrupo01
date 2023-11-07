import { StyleSheet, View, Alert, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Circle, Polyline, Marker, Polygon } from 'react-native-maps';
import Color from '../../Shared/Color';
import { UserLocationContext } from '../../Context/UserLocationContext';
import "react-native-url-polyfill/auto"
import { Supabase } from '../../../lib/Supabase';
//import Sound from 'react-native-sound';
import { Audio } from 'expo-av'

function GetDistance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}



export default function GoogleMapView() {

    const [sound, setSound] = React.useState();

    React.useEffect(() => {
        return sound? () => {
            sound.unloadAsync();
        } : undefined;
    }, [sound]);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('./../../../assets/emergency-alarm.mp3'));
        setSound(sound);
        await sound.playAsync();
    }

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

    const [isLocated, setIsLocated] = useState(false);
    //setIsLocated(false);

    const [myLocation, setMyLocation] = useState([]);
    
    //const {location, setLocation} = useContext(UserLocationContext);
    const { location, setLocation, onChangeLocation } = useContext(UserLocationContext);

    //console.log('-----------',isLocated);
    useEffect(() => {
        console.log('asdasdasdasdasda');
        if(location) {
            if (!isLocated) {
                setMapRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                });
                
                setIsLocated(true);
                console.log('insideee');
            }
            

            setMyLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            //console.log(location.coords);
            
        }
        else {
            setMyLocation({
                latitude: 0.0,
                longitude: 0.0,
            });
        }
    }, [location] );

    //SUPABASE
    
    const [ posts, setPosts ] = useState([]);

    const [ DangerAreas, setDangerAreas ] = useState([]);

    const handleCirclePress = (dangerArea) => {
        Alert.alert('Info');
    };

    useEffect(() => {
        const fetchPosts = async () => {
            //const { data, error } = await Supabase.from('"District" AS D').select('c.* where dc.id = 1 inner join Coordinate c =');
            /*const { data, error } =  await Supabase.rpc('GetCoordinatesForDistrict', { 'DistrictId ' : 1,});
            if(error) console.log(error);
            else { 
                setPosts(data);
                console.log('---------------------');
                console.log(data);
                console.log('---------------------');
            }*/

            setPosts([
                {key: 1,
                    coordinates : 
                [
                    { latitude: -16.477777336020456, longitude: -71.56352669968426 },
                    { latitude: -16.45559602752613, longitude: -71.59712863768353 },
                    { latitude: -16.431414341873168, longitude: -71.56468055948247 },
                    { latitude: -16.449883308728673, longitude: -71.53973999709241 },
                ]
            },
            {key: 2,
                coordinates : 
                [
                    { latitude: -16.45559602752613, longitude: -71.59712863768353 },
                    { latitude: -16.443505184695, longitude: -71.58090459858 },
                    { latitude: -16.424261404310265, longitude: -71.60043335117714 },
                    { latitude: -16.44321309840359, longitude: -71.61646033969612 },
                ],
        },
        {key: 3,
            coordinates : 
            [
                { latitude: -16.431414341873168, longitude: -71.56468055948247 },
                { latitude: -16.443505184695, longitude: -71.58090459858 },
                { latitude: -16.424261404310265, longitude: -71.60043335117714 },
                { latitude: -16.406812640685935, longitude: -71.59733986425178 },
            ]
    },

                
                
            ])
        };
        
        fetchPosts();
    }, []);
    
    var i = 0;
    
    useEffect(() => {
        const fetchDangerAreas = async () => {
            
            const { data, error } = await Supabase.from('DangerArea').select('*');
            if(error) console.log(error);
            else {
                setDangerAreas(data);
                console.log('getting data...');
                
                Alert.alert('You are near a dangerous area');
                await playSound();

                data.map( async (dangerArea) => {
                    console.log('getting distance...');
                    var distance = GetDistance(dangerArea.latitude, dangerArea.longitude, myLocation.latitude, myLocation.longitude);
                    console.log('distance:', distance);
                    const minDistance = 1000;
                    if (distance + dangerArea.radius <= minDistance) {
                        if (i == 0) {
                            console.log('alert...');
                            Alert.alert('You are near a dangerous area');
                            i++;
                            await playSound();
                        }
                        
                        
                    }
                })
            }
        };

        fetchDangerAreas();
        
    }, []);

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

                {
                    posts.map((dangerArea) => (
                        <Polygon 
                    coordinates = { dangerArea.coordinates }
                    strokeColor = "#FF5500"
                    strokeWidth = { 3 } 
                    lineDashPhase = { 1 }
                    key={dangerArea.key}
                />

                    ))
                }

            
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.appColor,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});