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
import profiles from './src/assets/data/profiles.json';

const { width, height } = Dimensions.get('window');

export default class App extends Component {

  state = {
    profileIndex: 0,
  }

  nextCard = () => {
    this.setState({ profileIndex: this.state.profileIndex + 1 })
  }

  render() {

    const { profileIndex } = this.state;
    const profileList = profiles.slice(profileIndex, profileIndex + 5).reverse().map((profile, i) => {
      return (
        <Card
          profile={profile}
          key={profile.id}
          onSwipeOff={this.nextCard}
        />
      );
    });
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appContainer}>
          <View style={styles.headerWrapper}>
            <Header />
          </View>
          <View style={styles.profileWrapper}>
            {profileList}
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
    fontFamily: 'Avenir',
  },
  headerWrapper: {
    alignItems: 'center',
  },
  profileWrapper: {
    flex: 1,
  },
});
