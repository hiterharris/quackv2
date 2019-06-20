import React, { Component } from 'react';
import {
    View,
    Button
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
        });
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}

export default class FaceBookSignIn extends Component {
    render() {
        return (
            <View>
                <Button
                    title={'Sign In with Facebook'}
                    onPress={() => logIn()}
                />
            </View>
        );
    }
}
