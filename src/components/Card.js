import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    PanResponder,
    Animated,
    Dimensions,
    Linking,
} from 'react-native';
import profiles from '../assets/data/profiles.json';
import MyLocation from './MyLocation';

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
                    }).start(this.props.onSwipeOff);
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
        const { name, categories, image_url, url, coordinates } = this.props.profile;
        return (
            <Animated.View
                {...this.cardPanResponder.panHandlers}
                style={[styles.cardContainer, animatedStyle]} >
                <Image
                    style={styles.restaurantImage}
                    source={{ uri: image_url }}
                />
                <View style={styles.restaurantDetailsContainer}>
                    <View style={styles.restaurantDetails}>
                        <Text style={styles.restaurantTitle}>{name}</Text>
                        <Text style={styles.restaurantCategory}>{categories[0].title}</Text>
                        <Text style={styles.restaurantDistance}>Distance: 2.4 miles</Text>
                    </View>
                    <Text style={styles.info} onPress={() => Linking.openURL(url)}>
                        <Image style={styles.infoImage} source={require('../assets/images/info-icon.png')} />
                    </Text>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'absolute',
        width: width * 0.90,
        height: height * 0.82,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        margin: 18,
        padding: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
    },
    restaurantImage: {
        position: 'absolute',
        width: width * 0.90,
        height: height * .82,
    },
    restaurantDetailsContainer: {
        top: height * 0.55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    restaurantDetails: {
    },
    restaurantTitle: {
        fontSize: 24,
        fontWeight: '600',
        width: width * .75,
        color: '#FFFFFF',
    },
    restaurantDistance: {
        fontSize: 20,
        fontWeight: '300',
        color: '#FFFFFF',
    },
    restaurantCategory: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 5,
    },
    info: {
        marginTop: 5,
    },
    infoImage: {
        width: 25,
        height: 25,
    },
});