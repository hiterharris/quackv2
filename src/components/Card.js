import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    PanResponder,
    Animated,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Card extends Component {
    componentWillMount() {
        this.pan = new Animated.ValueXY();
        this.cardPanResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: this.pan.x, dy: this.pan.y },
            ]),
            onPanResponderRelease: (e, { dx }) => {
                const absDx = Math.abs(dx);
                const direction = absDx / dx;
                if (absDx > 120) {
                    Animated.decay(this.pan, {
                        velocity: { x: 3 * direction, y: 0 },
                        deceleration: 0.995,
                    }).start();
                } else {
                    Animated.spring(this.pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 4.5,
                    }).start();
                }
            },
        });
    }

    render() {
        const rotateCard = this.pan.x.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ['10deg', '0deg', '-10deg'],
        });

        const animatedStyle = {
            transform: [
                { translateX: this.pan.x },
                { translateY: this.pan.y },
                { rotate: rotateCard },
            ],
        }

        return (
            <Animated.View
                {...this.cardPanResponder.panHandlers}
                style={[styles.cardContainer, animatedStyle]}>
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
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        position: "absolute",
        width: width * .945,
        height: height * 0.70,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
    },
    cardImage: {
        flex: 1,
        width: width,
    },
    cardDetails: {
        margin: 10,
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