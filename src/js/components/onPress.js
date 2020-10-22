import React from 'react'
import { BackHandler } from 'react-native';

// export const openPlayer = function openPlayer() {

// }

export const exitApp = function exitApp() {
  BackHandler.exitApp();
};

