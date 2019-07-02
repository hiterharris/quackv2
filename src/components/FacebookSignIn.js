import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import * as Facebook from 'expo-facebook';

async function logIn() {
    try {
        const {
            type,
            token,
            permissions,
        } = await Facebook.logInWithReadPermissionsAsync('2268190433218439', {
            permissions: ['public_profile'],
            token: '2268190433218439',
            auth_type: 'reauthenticate',
        });
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!');
        } else {
            type === 'cancel'
        }
    } catch ({ message }) {
        alert('Facebook Login Error');
    }
}

export default class FaceBookSignIn extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.fbSignIn} onPress={() => logIn()}>
                    <Image style={styles.fbButton} source={require('../assets/images/facebook-login.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fbSignIn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // margin: 10,
    },
    fbButton: {
        width: 200,
        height: 50,
    },
});