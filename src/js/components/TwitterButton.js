import React, { Component } from "react"
import {
  AppRegistry,
  Button,
  Text,
  View,
  NativeModules,
  TouchableOpacity 
} from "react-native";
import { styles } from '../styles';

const { RNTwitterSignIn } = NativeModules

const Constants = {
  //Dev Parse keys
  TWITTER_COMSUMER_KEY: "qWPj1TXbreMX1SsDvdiQTaF7Y",
  TWITTER_CONSUMER_SECRET: "4t0cRfGWXZvySIa5sS0M38AnT8a8B8hwcX2lZiaStSWStD4B4Z"
}

export default class TwitterButton extends Component {
  constructor(props) {
    super(props)
  }

  _twitterSignIn = () => {
    RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
    RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log(loginData)
        const { authToken, authTokenSecret } = loginData
        if (authToken && authTokenSecret) {
          this.props.hideModal();
        }
      })
      .catch(error => {
        console.log(error)
      }
    )
  }

  render() {
    return (
      <View style={this.props.style}>
        <Button 
          name="logo-twitter" 
          onPress={() => { this._twitterSignIn() }} 
          title="Login with Twitter">
        </Button>
      </View>
    )
  }
}