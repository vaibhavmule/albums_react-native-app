/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header';

const albums = () => (
  <Header headerText={'Albums'} />
);

AppRegistry.registerComponent('albums', () => albums);
