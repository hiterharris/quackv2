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
    TouchableOpacity,
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
            <View style={styles.container}>
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
                            <Text style={styles.restaurantDistance}>Distance: 0.0 miles</Text>
                        </View>
                        <Text style={styles.info} onPress={() => Linking.openURL(url)}>
                            <Image style={styles.infoImage} source={require('../assets/images/info-icon.png')} />
                        </Text>
                    </View>
                </Animated.View>
                <View style={styles.swipeButtons}>
                    <TouchableOpacity style={styles.dislike} onPress={() => console.log('dislike')}>
                        <Image source={require('../assets/images/dislike-button.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.like} onPress={() => console.log('like')}>
                        <Image source={require('../assets/images/like-button.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#EFF3F7',
        height: height,
        width: width,
    },
    cardContainer: {
        position: 'absolute',
        width: width * 0.95,
        height: height * .70,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        margin: 8,
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
        width: width * 0.95,
        height: height * .70,
        borderRadius: 8,
    },
    restaurantDetailsContainer: {
        position: 'absolute',
        top: height * .52,
        width: width * 0.90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
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
    swipeButtons: {
        flexDirection: 'row',
        top: height * .70,
        marginLeft: 60,
        borderColor: 'lightgrey',
        borderRadius: 8,
        margin: 8,
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
