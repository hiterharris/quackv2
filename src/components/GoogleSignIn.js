import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Google } from 'expo';

async function logIn() {
    try {
        const { type } = await Google.logInAsync({
            iosClientId: "1011125796493-etdqugd0i14aqqe48sdhdq2dt4710hd7.apps.googleusercontent.com",
        });
        if (type === 'success') {
            const response = await fetch('');
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Google Login Error: ${message}`);
    }
}

export default class GoogleSignIn extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.googleSignIn} onPress={() => logIn()}>
                    <Image style={styles.googleButton} source={require('../assets/images/google-login.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    googleSignIn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    googleButton: {
        width: 175,
        height: 35,
        borderRadius: 5,
    },
});