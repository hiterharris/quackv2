import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import console = require('console');
// import { getDistance } from 'geolib';

const lat1 = 35.22092;
const lon1 = -80.81485;
const lat2 = 35.1527248375554;
const lon2 = -80.8279533140167;

function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}

export default class Distance extends Component {
    render() {
        return (
            <View>
                <Text style={styles.distance}>Distance: </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    distance: {
        fontSize: 18,
        color: 'white',
        marginTop: 5,
    }
});
