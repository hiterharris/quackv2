import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={styles.cardContainer}>
                <Image
                    style={styles.cardImage}
                    source={require('../assets/images/sitti.png')}
                />
                <View style={styles.cardDetails}>
                    <View style={styles.restaurantDetails}>
                        <Text style={styles.restaurantTitle}>Sitti</Text>
                        <Text style={styles.restaurantDistance}>0.0 miles</Text>
                    </View>
                    <Text style={styles.restaurantCategory}>Middle Eastern</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
    },
    cardImage: {
        flex: 1,
        width: '100%',
    },
    cardDetails: {
        margin: 10,
        marginBottom: 0,
    },
    restaurantDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    restaurantTitle: {
        fontSize: 30,
    },
    restaurantDistance: {
        fontSize: 18,
        color: '#333333',
        marginTop: 15,
    },
    restaurantCategory: {
        fontSize: 15,
        color: 'darkgrey',
        marginBottom: 10,
    },
    reviewCount: {
        fontSize: 15,
        color: 'darkblue',
    }
});