import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import profiles from '../assets/data/profiles.json';

export default class LocationAPI extends Component {
    state = {
        location: null,
        errorMessage: null,
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    render() {
        let longitude = 'Waiting..';
        if (this.state.errorMessage) {
            longitude = this.state.errorMessage;
        } else if (this.state.location) {
            longitude = JSON.stringify(this.state.location.coords.longitude);
        }
        let latitude = 'Waiting..';
        if (this.state.errorMessage) {
            latitude = this.state.errorMessage;
        } else if (this.state.location) {
            latitude = JSON.stringify(this.state.location.coords.latitude);
        }
        const coordinates = profiles[0].coordinates;
        return (
            <View>
                <Text style={styles.location}>My Longitude: {longitude}</Text>
                <Text style={styles.location}>My Latitude: {latitude}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    location: {
        fontSize: 18,
        color: 'white',
    }
});