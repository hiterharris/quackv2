import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Card from './Card';
import Header from './Header';
import profiles from '../assets/data/profiles.json';
import Home from './Home';

export default class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileIndex: 0,
        }
    }
    nextCard = () => {
        this.setState({ profileIndex: this.state.profileIndex + 1 })
    }
    static navigationOptions = {
        headerTitle: <Header />,
    };
    render() {
        const { profileIndex } = this.state;
        return (
            <View style={styles.appContainer}>
                <View style={styles.profileWrapper}>
                    {profiles.slice(profileIndex, profileIndex + 5).reverse().map((profile, i) => {
                        return (
                            <Card
                                profile={profile}
                                key={profile.id}
                                onSwipeOff={this.nextCard}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'white',
        fontFamily: 'Avenir',
    },
    headerWrapper: {
        alignItems: 'center',
    },
    profileWrapper: {
        flex: 1,
    },
});
