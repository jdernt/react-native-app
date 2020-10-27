import React from 'react'
import { BackHandler } from 'react-native';
import Communications from 'react-native-communications';

export const exitApp = function exitApp() {
  BackHandler.exitApp();
  console.log('exit app')
};

export const openBrowser = function openBrowser() {
  Communications.web('https://q-digital.org/');
  console.log('open browser')
}

