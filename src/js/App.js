import React, { Component } from 'react';
import {
  View,
  Text,
  Modal
} from 'react-native';
import Navigation from './components/Navigation';
import Auth from './components/Auth';
import { styles } from './styles';

import { Provider } from "react-redux";
import store from "./redux/initialState";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true,
      isLoggedIn: false,
    }
  }

  hideModal = () => {
    this.setState({
      isLoggedIn: true,
      isActive: false
    })
  }

  render() {
    const { isActive } = this.state

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isActive}
          >
            <Auth 
              hideModal={this.hideModal} 
            />
          </Modal>
          <Header />
          <Navigation />
        </View>
      </Provider>
    )
  }
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
