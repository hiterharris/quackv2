import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from './src/components/SignIn';
import Home from './src/components/Home';
import Swiper from './src/components/Swiper';
import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>

      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    SignIn: SignIn,
    Home: Home,
    Swiper: Swiper,
  },
  {
    initialRouteName: "SignIn",
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