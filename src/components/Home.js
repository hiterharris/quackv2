import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './Header';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Header />,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="Start Swiping!"
                    onPress={() => this.props.navigation.navigate('Swiper')}
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
