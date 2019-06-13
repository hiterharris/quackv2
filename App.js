import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import Card from './src/components/Card';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appContainer}>
          <View style={styles.headerContainer}>
            <Header />
          </View>
          <View style={styles.profileContainer}>
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
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 150,
  },
});
