import React, { Component } from 'react';
import {
  Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/components/Home';
import Swiper from './src/components/Swiper';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Swiper: Swiper,
  },
  {
    initialRouteName: "Home",
  },
);

export default createAppContainer(AppNavigator);