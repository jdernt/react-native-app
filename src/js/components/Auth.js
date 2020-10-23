import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';
import { styles } from '../styles';

const socials = [
  {
    title: 'facebook',
  },
  {
    title: 'twitter',
  },
  {
    title: 'vk'
  },
  {
    title: 'google'
  }
]

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true
    }
  }

  render() {
    return (
      <View style={styles.auth}>
        <Text style={styles.auth__title}>Авторизуйтесь</Text>
        {socials.map((social, i) => {
          return <Button title={social.title} key={i} />
        })}
        <TouchableHighlight 
          style={styles.auth__close}
          onPress={() => {
            this.props.onPress();
          }}
        >
          <Text>Hide</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Auth;
