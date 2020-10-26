import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';
import FBLoginButton from './FBLoginButton'
import TwitterButton from './TwitterButton';
import { styles } from '../styles';


class Auth extends Component {
  render() {
    return (
      <View style={styles.auth}>
        <Text style={styles.auth__title}>Авторизуйтесь</Text>
        <FBLoginButton
          hideModal={this.props.hideModal} 
        />
        <TwitterButton 
          hideModal={this.props.hideModal}
        />
      </View>
    )
  }
}

export default Auth;
