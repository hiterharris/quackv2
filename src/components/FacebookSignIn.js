
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as Facebook from 'expo-facebook';

async function logIn() {
    try {
        const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync('2268190433218439', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            const response = await fetch('https://www.googleapis.com/userinfo/v2/me');
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
            <View style={styles.container}>
                <Button
                    title={'Sign In with Facebook'}
                    onPress={() => logIn()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
})