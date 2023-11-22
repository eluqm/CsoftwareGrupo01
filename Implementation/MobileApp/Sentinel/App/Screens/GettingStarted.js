import { StyleSheet, View, Text, Animated, Image, Pressable, Dimensions, ScrollView, useWindowDimensions, ImageBackground, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'; 

//--
import Color from '../Shared/Color';
import { Supabase } from '../../lib/Supabase';

export default function GettingStarted({ navigation }) {

    const [index, setIndex] = React.useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();

    const images = [
        {
            Id : 1,
            Text: 'This Red Pin represents your current location on the map.',
            Image: require('./../../assets/t-user.png'),
            Icon: ( <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <Entypo name = "location-pin" size = { 28 } color = "red" />
        </View> 
            ),
        },
        {
            Id : 2,
            Text: 'This Red Circle represents a dangerous zone or area.',
            Image: require('./../../assets/t-danger-area.png'),
            Icon: ( <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <FontAwesome name="circle" size={24} color="red" />
        </View> 
            ),
        },
        {
            Id : 3,
            Text: 'These Lines represent streets: Red if it is dangerous, Yellow if it is moderately dangerous, and Green if it is a safe street.',
            Image: require('./../../assets/t-streets.png'),
            Icon: ( <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Entypo name="flow-line" size={30} color="red" />
                        <Entypo name="flow-line" size = {30} color="#f5e600"/>
                        <Entypo name="flow-line" size = {30} color="#1DD000"/>
                    </View> ),
        },
        {
            Id : 4,
            Text: 'These Shields represent: Blue if it is a police station, Green if it is a Security Station.',
            Image: require('./../../assets/tutorial.png'),
            Icon: ( <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Entypo name="shield" size={28} color="#00AAFF" />
                        <Entypo name="shield" size={28} color="#00AA00" />
                    </View>
                ),
        }
    ]

    return (
        <SafeAreaView style = { styles.container } >
            <View style = { styles.scrollContainer } >
                <ScrollView
                    horizontal = { true }
                    pagingEnabled
                    
                    showsHorizontalScrollIndicator = { false }
                    
                    onScroll = { Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                x: scrollX,
                                },
                            },
                        },
                    ]
                    , {useNativeDriver:false})}
                    scrollEventThrottle = { 1 }
                    
                    onMomentumScrollEnd = { (event ) => {
                        const offsetX = event.nativeEvent.contentOffset.x;
                        const pageWidth = event.nativeEvent.layoutMeasurement.width;
                        setIndex(Math.floor(offsetX / pageWidth));
                    }}
                >
                    {
                        images.map((image) => {
                            return (
                                <View 
                                    style = {{ width: windowWidth }} 
                                    key = { image.Id }
                                    
                                >
                                    <ImageBackground 
                                        source = { image.Image }
                                        style = { styles.card }
                                    >
                                        
                                    </ImageBackground>
                                    
                                    <View style = { styles.textContainer }>
                                        {
                                            image.Icon
                                        }
                                        <Text style = { styles.infoText }>
                                            { image.Text }
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>

                <View style = { styles.indicatorContainer } >
                    {
                        images.map((image, imageIndex) => {

                            const width = scrollX.interpolate({
                                inputRange: [
                                    windowWidth * (imageIndex - 1),
                                    windowWidth * imageIndex,
                                    windowWidth * (imageIndex + 1),
                                ],
                                outputRange: [8, 16, 8],
                                extrapolate: 'clamp',
                            });

                            return (
                                <Animated.View
                                    key = { imageIndex }
                                    style = { [styles.normalDot, { width }] }
                                />
                            );
                        })
                    }
                </View>

                {(index == 3) && (
                    <Pressable onPress = { () => {
                        if(index == 3) {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Welcome' }, { name: 'LogIn' }],
                            });
                        }
                    } }>
                        {({pressed}) => (
                            <Text style = { !pressed ? styles.signUp : styles.signUpPressed }>  Next </Text>
                        )}
                    </Pressable>
                )}

                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
        height: '100%',
    },
    scrollContainer: {
        marginTop: 100,
        height: 600,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        height: 400,
    },

    textContainer: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
});