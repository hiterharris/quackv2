import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Card from './Card';
import Header from './Header';
import axios from 'axios';

export default class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessList: [],
            profileIndex: 4,
        }
    }

    componentDidMount() {
        axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx`,
            },
            params: {
                location: 'charlotte',
            },
        })
        .then(response => {
            this.setState({
                businessList: response.data.businesses
            });
        })
        .catch(error => {
            console.log('DATA NOT RETURNED', error);
        });
    }

    nextCard = () => {
        this.setState({ profileIndex: this.state.profileIndex + 1 })
    }

    static navigationOptions = {
        headerTitle: <Header />,
    };

    render() {
        const { profileIndex, businessList } = this.state;
        return (
            <View style={styles.appContainer}>
                <View style={styles.profileWrapper}>
                    {businessList.slice(profileIndex, profileIndex + 10).reverse().map((business) => {
                        return (
                            <Card
                                business={business}
                                key={business.id}
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
