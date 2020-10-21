import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Navigation from './components/Navigation';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Navigation />
    </View>
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
