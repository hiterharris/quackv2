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

        const { name, categories, rating, image_url } = this.props.profile;

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

        const starRating = () => {
            if (rating === 4.0) {
                return (
                    <Image style={styles.stars} source={require('../assets/images/4-stars.png')} />
                );
            } else if (rating === 4.5) {
                return (
                    <Image style={styles.stars} source={require('../assets/images/4.5-stars.png')} />
                );
            } else {
                return (
                    <Image style={styles.stars} source={require('../assets/images/5-stars.png')} />
                );
            }
        }

        return (
            <Animated.View
                {...this.cardPanResponder.panHandlers}
                style={[styles.cardContainer, animatedStyle]} >
                <Image
                    style={styles.cardImage}
                    source={{ uri: image_url }}
                />
                <View style={styles.cardDetails}>
                    <View style={styles.restaurantDetails}>
                        <Text style={styles.restaurantTitle}>{name}</Text>
                        <Text style={styles.restaurantDistance}>0.0 miles</Text>
                    </View>
                    <Text style={styles.restaurantCategory}>{categories[0].title}</Text>
                    <View style={styles.restaurauntReview}>
                        {starRating()}
                    </View>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        position: "absolute",
        width: width * 0.95,
        height: height * 0.85,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        margin: 10,
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
    cardImage: {
        flex: 1,
        width: width * 0.895,
    },
    cardDetails: {
        margin: 10,
        // marginBottom: -150,
    },
    restaurantDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    restaurantTitle: {
        fontSize: 20,
        marginTop: 12,
        width: '50%',
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
    restaurauntReview: {
        width: width * .50,
        height: height * .25,
        marginBottom: -150,
    },
    stars: {
        width: '50%',
        height: '10%',
    }
});