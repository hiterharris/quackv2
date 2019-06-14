import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import shuffle from 'shuffle-array';
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
    const randomList = profiles.sort(function (a, b) { return 0.5 - Math.random() });
    const profileList = randomList.slice(profileIndex, profileIndex + 3).map((profile, i) => {
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
