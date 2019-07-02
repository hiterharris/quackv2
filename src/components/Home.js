import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
} from 'react-native';
import Header from './Header';
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Header />,
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.swiper} onPress={() => logIn()} onPress={() => this.props.navigation.navigate('Swiper')} >
                    <Image style={styles.swiperButton} source={require('../assets/images/start-swiping.png')} />
                </TouchableOpacity>
                <GoogleSignIn />
                <FacebookSignIn />
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
    swiper: {
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    swiperButton: {
        width: 200,
        height: 50,
    },
});
