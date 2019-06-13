import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from './src/components/Card';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.profileContainer}>
          <Card />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  profileContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 150,
  }
});
