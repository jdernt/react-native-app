import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Navigation from './components/Navigation';
import { styles } from './styles';

import { Provider } from "react-redux";
import store from "./redux/initialState";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Navigation />
      </View>
    </Provider>
  )
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header__title}>
        React Native App
      </Text>
    </View>
  )
}

export default App;
