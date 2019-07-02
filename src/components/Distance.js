import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import profiles from '../assets/data/profiles.json';
import * as geolib from 'geolib';
import CalculateDistance from './CalculateDistance';

export default class Distance extends Component {
    render() {
        return (
            <View>
                <CalculateDistance />
            </View>
        );
    }
}
