import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import profiles from '../assets/data/profiles.json';
import Header from './Header';
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';
import Data from './Data';

import axios from 'axios';

const { width, height } = Dimensions.get('window');

axios.get('https://api.yelp.com/v3/businesses/search', {
    headers: {
        Authorization: `Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx`
    },
    params: {
        location: 'charlotte',
    }

})
.then(response => {
    console.log(response.data.businesses);
    return response;
})
.catch((error) => {
    console.log ('error', error)
    })

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Header />,
    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.homeBackground} source={{ uri: profiles[0].image_url }} />
                <TouchableOpacity style={styles.swiperButton} onPress={() => this.props.navigation.navigate('Swiper')} >
                    <Image style={styles.swiperButtonImage} source={require('../assets/images/start-swiping.png')} />
                </TouchableOpacity>
                <GoogleSignIn />
                <FacebookSignIn />
                <Data />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 75,
    },
    homeBackground: {
        position: 'absolute',
        width: width,
        height: height + 8,
    },
    swiperButton: {
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 20,
    },
    swiperButtonImage: {
        width: 300,
        height: 90,
    },
});
