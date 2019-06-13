import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 40,
    },
});