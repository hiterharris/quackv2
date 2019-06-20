
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
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
            <View style={styles.container}>
                <Button
                    title={'Sign In with Google'}
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