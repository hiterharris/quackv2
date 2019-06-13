import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Card from './src/components/Card';
import Header from './src/components/Header';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appContainer}>
          <View style={styles.headerWrapper}>
            <Header />
          </View>
          <View style={styles.profileWrapper}>
            <Card />
            <Card />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    alignItems: 'center',
  },
  profileWrapper: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
  },
});
