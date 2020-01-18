import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');


export default function Data() {
    const [business, setBusiness] = useState([]);

    useEffect( () => {
        axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx`
            },
            params: {
                location: 'charlotte',
            }
        
        })
        .then(response => {
            setBusiness(response.data.businesses);
        })
        .catch((error) => {
            console.log ('error', error)
            })
    }, []);

    const [profileIndex, setProfileIndex] = useState(0);
    nextCard = () => {
        setProfileIndex(profileIndex + 1);
    }

    return (
        <View onSwipeOff={this.nextCard}>
            {business.slice(profileIndex, profileIndex + 5).reverse().map((restaurant, index) => {
                return (
                    <View style={styles.cardContainer} key={index}>
                        <Image
                            style={styles.restaurantImage}
                            source={{ uri: restaurant.image_url }}
                        />
                        <View style={styles.restaurantDetailsContainer}>
                            <View style={styles.restaurantDetails}>
                                <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
                                {/* <Text style={styles.restaurantCategory}>{restaurant.categories[0].title}</Text> */}
                                <Text style={styles.restaurantDistance}>Distance: 2.4 miles</Text>
                            </View>
                            <View style={styles.info} onPress={() => Linking.openURL(restaurant.url)}>
                                <Image style={styles.infoImage} source={require('../assets/images/info-icon.png')} />
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'absolute',
        width: width * 0.90,
        height: height * 0.82,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        margin: 18,
        padding: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
    },
    restaurantImage: {
        position: 'absolute',
        width: width * 0.90,
        height: height * .82,
    },
    restaurantDetailsContainer: {
        top: height * 0.55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    restaurantDetails: {
    },
    restaurantTitle: {
        fontSize: 24,
        fontWeight: '600',
        width: width * .75,
        color: '#FFFFFF',
    },
    restaurantDistance: {
        fontSize: 20,
        fontWeight: '300',
        color: '#FFFFFF',
    },
    restaurantCategory: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 5,
    },
    info: {
        marginTop: 5,
    },
    infoImage: {
        width: 25,
        height: 25,
    },
});