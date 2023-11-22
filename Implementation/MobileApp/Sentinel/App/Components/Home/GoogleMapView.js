import { StyleSheet, View, Alert, Text, Image, TextInput, Dimensions, Pressable } from 'react-native'
import React, { useContext, useEffect, useState, useRef } from 'react'
import MapView, { PROVIDER_GOOGLE, Circle, Polyline, Marker, Polygon } from 'react-native-maps';
import "react-native-url-polyfill/auto"
import { getDistance } from 'geolib';
//-------------------- EXTERNAL
import { Audio } from 'expo-av'
import { Ionicons } from '@expo/vector-icons'; 

//-------------------- INTERNAL
//import { useLogIn } from './../Context/LogInContext';
import { Supabase } from '../../../lib/Supabase';
import { UserLocationContext } from '../../Context/UserLocationContext';
import Color from '../../Shared/Color';
import { useLogIn } from './../../Context/LogInContext';


export default function GoogleMapView() {    
    /*
    const position = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
        Animated.sequence([
            Animated.timing(position, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            }),
            Animated.timing(position, {
            toValue: -1,
            duration: 1000,
            useNativeDriver: true,
            }),
        ]),
        ).start();
    }, [position]);

    const translateY = position.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [-10, 0, 10],
    });*/
    /*
    */

    const { profile } = useLogIn();
    const [ sound, setSound ] = React.useState();
    const [ showAlert, setShowAlert ] = React.useState(true);

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

    const coordinates = [
        { latitude: -16.403366170204027, longitude: -71.50947592108464 },
        { latitude: -16.402867980935188, longitude: -71.50859065550974 },
        { latitude: -16.4020944187011, longitude: -71.5073284946916 },
    ];
    const policeLocation = { latitude: -16.399494477956868,  longitude: -71.50671502706446 };
    const securityLocation = { latitude: -16.401975103977186,   longitude: -71.5063475865762 };

    const coordinates2 = [
        { latitude: -16.39939068168573, longitude: -71.50637075203085 },
        { latitude: -16.399436167891437, longitude: -71.5056538341287 },
        { latitude: -16.39947983463509, longitude: -71.50557417659547 },
        { latitude: -16.398846665850336, longitude: -71.50447604043674 },
        { latitude: -16.39849124778961, longitude: -71.50385300165128 }
    ];

    //------------------
    const [mapRegion, setMapRegion] = useState([]);

    const [isLocated, setIsLocated] = useState(false);
    //setIsLocated(false);

    const [myLocation, setMyLocation] = useState([]);

    const [areasSaved, setAreasSaved] = useState([]);
    const [count, setCount] = useState(5);
    const [count2, setCount2] = useState(1);
    //const [mapRegion, setMapRegion] = useState([]);

    //const {location, setLocation} = useContext(UserLocationContext);
    const { location, setLocation, onChangeLocation } = useContext(UserLocationContext);
const [searchBarValue, onChangeSearchBarValue] = React.useState(200);

    //console.log('-----------',isLocated);
    useEffect(() => {
        const distance = getDistance(
            { latitude: -16.398948781819854, longitude: -71.50674451504122 },
            { latitude: -16.399544056318696, longitude: -71.5065540913241 }
          );
        //  -16., -71.
          console.log(distance);

        console.log('asdasdasdasdasda', distance);

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

            if(count2 == 1) {
                var i = 0;
                DangerAreas.map( async (dangerArea) => {
                    
                    const  distance = getDistance( { latitude: dangerArea.latitude, longitude: dangerArea.longitude} ,  { latitude: myLocation.latitude, longitude: myLocation.longitude });
                    console.log('distance:', distance);
                    const minDistance = searchBarValue;
                    if (distance - dangerArea.radius <= minDistance) {
                        if (i == 0) {
                            if(showAlert) Alert.alert(`You are near a dangerous area ${distance-dangerArea.radius} m`);
                            i++;
                            await playSound();
                        }
                    }
                })
            }
            setCount2(count2 + 1);
            console.log('getting distance..', count2);
            if(count <= count2) setCount2(1);
            
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
                {
                    key: 10,
                    Name: 'Mariano Melgar',
                    coordinates: [
                        { latitude: -16.40318288121594, longitude: -71.51646078713098 },
                        { latitude: -16.410592036741523, longitude: -71.51334154204291 },
                        { latitude: -16.41081290564472, longitude: -71.51305042438638 },
                        { latitude: -16.41084106267175, longitude: -71.50931256936761 },
                        { latitude: -16.410785475543126, longitude: -71.50802034615475 },
                        { latitude: -16.410850392437396, longitude: -71.50745342998596 },
                        { latitude: -16.410869471811544, longitude: -71.50703251103162 },
                        { latitude: -16.410843711243828, longitude: -71.50684314304178 },
                        { latitude: -16.40824032573742, longitude: -71.50175958456073 },
                        { latitude: -16.407807676934883, longitude: -71.50146190897175 },
                        { latitude: -16.40771826738598, longitude: -71.50120823058334 },
                        { latitude: -16.40726042959932, longitude: -71.4982297500609 },
                        { latitude: -16.40694551510665, longitude: -71.4975371968415 },
                        { latitude: -16.406338384188878, longitude: -71.49499665841383 },
                        { latitude: -16.404779800655408, longitude: -71.49115626412642 },
                        { latitude: -16.4049215925571, longitude: -71.48995845770699 },
                        { latitude: -16.404711405939132, longitude: -71.48931314906432 },
                        { latitude: -16.40504173040284, longitude: -71.48751343606303 },
                        { latitude: -16.40431875732288, longitude: -71.4844588487688 },
                        { latitude: -16.403374489912064, longitude: -71.48289035235643 },
                        { latitude: -16.40266986462774, longitude: -71.48246127786364 },
                        { latitude: -16.402179977340346, longitude: -71.4803480477439 },
                        { latitude: -16.402613288166396, longitude: -71.47898763269964 },
                        { latitude: -16.401990233473644, longitude: -71.4769868636537 },
                        { latitude: -16.400271642897426, longitude: -71.47900563097404 },
                        { latitude: -16.39350057571047, longitude: -71.47917551733491 },
                        { latitude: -16.389608570886324, longitude: -71.48398555597099 },
                        { latitude: -16.38491566599499, longitude: -71.49488572052907 },
                        { latitude: -16.390671241073175, longitude: -71.50308670809133 },
                        { latitude: -16.39092007985988, longitude: -71.50379265894847 },
                        { latitude: -16.394755836221766, longitude: -71.50791822417796 },
                        { latitude: -16.395870398041918, longitude: -71.50964410132288 },
                        { latitude: -16.39800634690852, longitude: -71.51089824433814 },
                        { latitude: -16.401264538983334, longitude: -71.51357312525528 },
                        { latitude: -16.403184035181457, longitude: -71.51646078713098 }
                    ]
                },
                {
                    key: 1,
                    Name: 'Hunter',
                    coordinates : 
                    [
                        { latitude: -16.477777336020456, longitude: -71.56352669968426 },
                        { latitude: -16.45559602752613, longitude: -71.59712863768353 },
                        { latitude: -16.431414341873168, longitude: -71.56468055948247 },
                        { latitude: -16.449883308728673, longitude: -71.53973999709241 },
                        { latitude: -16.477777336020456, longitude: -71.56352669968426 },
                    ]
                },/*
                {
                    key: 2,
                    Name: 'Tiabaya',
                    coordinates : 
                    [
                        { latitude: -16.45559602752613, longitude: -71.59712863768353 },
                        { latitude: -16.443505184695, longitude: -71.58090459858 },
                        { latitude: -16.424261404310265, longitude: -71.60043335117714 },
                        { latitude: -16.44321309840359, longitude: -71.61646033969612 },
                        { latitude: -16.45559602752613, longitude: -71.59712863768353 },
                    ],
                },*/

                {
                    key: 3,
                    coordinates : 
                    [
                        { latitude: -16.431414341873168, longitude: -71.56468055948247 },
                        { latitude: -16.443505184695, longitude: -71.58090459858 },
                        { latitude: -16.424261404310265, longitude: -71.60043335117714 },
                        { latitude: -16.406812640685935, longitude: -71.59733986425178 },
                        { latitude: -16.431414341873168, longitude: -71.56468055948247 },
                    ]
                },
                {
                    key: 4,
                    Name: 'Miraflores',
                    coordinates : 
                    [
                        { latitude: -16.391015857301788 , longitude: -71.52789208144259 },
                        { latitude: -16.39324357327881 , longitude:  -71.52749655835608 },
                        { latitude: -16.393402365885798 , longitude: -71.52879624309772 },
                        { latitude: -16.403177426198795 , longitude: -71.51645984379233 },
                        { latitude: -16.3985613881549 , longitude: -71.51098818332085 },
                        { latitude: -16.395569288137995, longitude: -71.5093203625558 },
                        { latitude: -16.39383120303985, longitude: -71.50658997751397 },
                        { latitude: -16.390954760526046, longitude: -71.50385959247215 },
                        { latitude: -16.383475811062485, longitude: -71.4919556243759 },
                        { latitude: -16.38173149764162, longitude: -71.49155372190478 },
                        { latitude: -16.381682534202564, longitude: -71.4893974833231 },
                        { latitude: -16.380648179296713, longitude: -71.48772607945975 },
                        { latitude: -16.380654299755996, longitude: -71.4864757162163 },
                        { latitude: -16.379001768738735, longitude: -71.48492552105891 },
                        { latitude: -16.375292703694384, longitude: -71.48759849129516 },
                        { latitude: -16.3689271471501, longitude: -71.48560811715336 },
                        { latitude: -16.369392329404615, longitude: -71.4887340251886 },
                        { latitude: -16.36781315333765, longitude: -71.48743262671073 },
                        { latitude: -16.366136029873843, longitude: -71.48898920136074 },
                        { latitude: -16.367586618730144, longitude: -71.49291840426612 },
                        { latitude: -16.366815387667366, longitude: -71.49362013873949 },
                        { latitude: -16.37727883856576, longitude: -71.5117883575404 },
                        { latitude: -16.378711045552862, longitude: -71.51242629797073 },
                        { latitude: -16.379494470662816, longitude: -71.51390631968854 },
                        { latitude: -16.381820245115332, longitude: -71.51399563134879 },
                        { latitude: -16.38598091393326, longitude: -71.5184272510233 },
                        { latitude: -16.38655622052239, longitude: -71.52013693137658 },
                        { latitude: -16.38811076387296, longitude: -71.52108108321347 },
                        { latitude: -16.391015857301788 , longitude: -71.52789208144259 },
                    ]
                },
                {
                    key: 5,
                    Name: 'Arequipa',
                    coordinates : 
                    [
                        { latitude: -16.432802371571437, longitude: -71.56284198409243 },
                        { latitude: -16.431407275788466, longitude: -71.5647175289576 },
                        { latitude: -16.428776146800477, longitude: -71.56270163725137 },
                        { latitude: -16.426353029083426, longitude: -71.56147679162513 },
                        { latitude: -16.419046779002038, longitude: -71.55313253105113 },
                        { latitude: -16.41717427872837, longitude: -71.55225217332679 },
                        { latitude: -16.412817280252618, longitude: -71.55463807049159 },
                        { latitude: -16.406134727829485, longitude: -71.55161423292256 },
                        { latitude: -16.40344205942006, longitude: -71.55235424380976 },
                        { latitude: -16.39705294259993, longitude: -71.54737830857927 },
                        { latitude: -16.396012549278364, longitude: -71.54500517026895 },
                        { latitude: -16.393380941512202, longitude: -71.54386963630296 },
                        { latitude: -16.392401729490267, longitude: -71.53983785294619 },
                        { latitude: -16.38169515054033, longitude: -71.53540154116253 },
                        { latitude: -16.37540325049868, longitude: -71.533117714485 },
                        { latitude: -16.37624789478683, longitude: -71.53013215327105 },
                        { latitude: -16.386579189708186, longitude: -71.53330909666431 },
                        { latitude: -16.387497228625396, longitude: -71.52991525363888 },
                        { latitude: -16.389406735479394, longitude: -71.52839695541469 },
                        { latitude: -16.393164492447053, longitude: -71.52755487408182 },
                        { latitude: -16.394150780411884, longitude: -71.52818264187324 },
                        { latitude: -16.40317734686678, longitude: -71.51647315754741 },
                        { latitude: -16.41076451297411, longitude: -71.51339050193727 },
                        { latitude: -16.412508290399302, longitude: -71.52629270166568 },
                        { latitude: -16.420355527522986, longitude: -71.53847609452346 },
                        { latitude: -16.428301708531755, longitude: -71.55200605667159 },
                        { latitude: -16.428017646573693, longitude: -71.554267546962 },
                        { latitude: -16.430134798625836, longitude: -71.5587969239179 },
                        { latitude: -16.429779901916227, longitude: -71.56034073975931 },
                        { latitude: -16.432802622103654, longitude: -71.562815948629 },
                        { latitude: -16.432802371571437, longitude: -71.56284198409243 },
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
                    <Image 
                        source = { require('./../../../assets/user-location.gif') } 
                        style = {{ height: 35, width: 35 }}
                    />
                </Marker>

                <Marker title = "Police" coordinate = { policeLocation }>
                    <Image 
                        source = { require('./../../../assets/police.png') } 
                        style = {{ height: 30, width:30 }}
                    />
                </Marker>

                <Marker title = "Security" coordinate = { securityLocation }>
                    <Image 
                        source = { require('./../../../assets/security.png') }
                        style = {{ height: 30, width:30 }}
                    />
                </Marker>

                {
                    DangerAreas.map((dangerArea) => (
                        <View key = { dangerArea.id }>
                            <Circle
                            center = {{ latitude: dangerArea.latitude, longitude: dangerArea.longitude }}
                            radius = { dangerArea.radius }
                            strokeColor = { Color.red }
                            fillColor = "rgba(255, 0, 0, 0.25)"
                            strokeWidth = { 1 }
                        />

                        <Marker 
                            title = { `Danger Area - ${dangerArea.id}` }
                            coordinate = {{ latitude: dangerArea.latitude, longitude: dangerArea.longitude }}>
                            <Image 
                                source = { require('./../../../assets/danger-area-icon.png') }
                                style = {{ height: 25, width:25 }}
                            />
                        </Marker>
                        </View>
                        
                    ))
                }

                <Polyline
                    coordinates = { coordinates2 }
                    strokeColor = { Color.red }
                    strokeWidth = { 5 }
                />

                <Polyline
                    coordinates = { coordinates }
                    strokeColor = { '#1DD000' }
                    strokeWidth = { 5 }
                />

                {
                    posts.map((district) => (
                        <Polyline 
                            coordinates = { district.coordinates }
                            strokeColor = "#FF5500"
                            strokeWidth = { 3 } 
                            lineDashPattern = { [5,5] }
                            key = {district.key}
                        />

                    ))
                }
            
            </MapView>

            <View style = { styles.container2 }>
                <View style = {{ width: Dimensions.get('screen').width * 0.9 }}>
                    
                </View>
                <Pressable 
                    style = {{ alignSelf: 'flex-end', top: 50, left: 10 }}
                    onPress = { () => { showAlert ? setShowAlert(false) : setShowAlert(true) } }
                >
                    {({pressed}) => (
                        <Ionicons
                            style = { showAlert ? styles.location2 : styles.location}
                            name = { "alert-circle" } 
                            color = "black"
                        />
                        
                    )}
                </Pressable>
            </View>

            <View style = { styles.container2 }>
                <TextInput
                    keyboardType={'numeric'}
                    placeholder = 'Distance' 
                    style = { styles.searchBar }
                    value = { `${searchBarValue}` }
                    onChangeText = { (text) => onChangeSearchBarValue(Number(text)) }
                    cursorColor = { Color.black }
                    onTouchStart = { () => { //setSearchBarTouch(true); 
                    } }
                />
                <TextInput
                    keyboardType={'numeric'}
                    placeholder = 'Time' 
                    style = { styles.searchBar }
                    value = { `${count}` }
                    onChangeText = { (text) => setCount(Number(text)) }
                    cursorColor = { Color.black }
                    onTouchStart = { () => { //setSearchBarTouch(true); 
                    } }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    location: {
        backgroundColor: Color.white,
        borderWidth: 1,
        width: 40,
        height: 40,
        paddingVertical: 5,
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
      },
      location2: {
        backgroundColor: Color.black,
        borderWidth: 1,
        width: 40,
        height: 40,
        paddingVertical: 5,
        color: '#FF0',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
      },
    container2: {
        position: 'absolute',
        marginTop: 20,
        marginLeft: Dimensions.get('screen').width * 0.05,
        flexDirection: 'column',
        maxHeight: Dimensions.get('screen').height * 0.4,
    },

      searchBar: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        width: Dimensions.get('screen').width * 0.5,
        height: 40,
        backgroundColor: Color.white,
        paddingHorizontal: 20,
        top: -10,
      },

    container: {
        flex: 1,
        backgroundColor: Color.appColor,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});