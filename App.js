import React, { Component } from 'react';
import { mButton } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
