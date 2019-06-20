import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './Header';
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';
import LocationAPI from './Location';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Header />,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="Swiper"
                    onPress={() => this.props.navigation.navigate('Swiper')}
                />
                <GoogleSignIn />
                <FacebookSignIn />
                <Button
                    title="Location"
                    onPress={() => this.props.navigation.navigate('Location')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
