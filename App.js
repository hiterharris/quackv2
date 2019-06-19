import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Swiper from './src/components/Swiper';
import Home from './src/components/Home';


export default class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Swiper />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'Avenir',
  }
});
