import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/components/Home';
import Swiper from './src/components/Swiper';
import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Home />
        <Swiper />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Swiper: Swiper,
  },
  {
    initialRouteName: "Home",
  },
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'Avenir',
  }
});

export default createAppContainer(AppNavigator);