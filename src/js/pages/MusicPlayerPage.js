import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native';
import Sound from 'react-native-sound';

import { styles } from '../styles';

const sounds = [
  {
    title: 'jungle',
    url: 'jungle.mp3',
  },
  {
    title: 'im a man',
    url: 'imaman.mp3',
  }
];

class MusicPlayerPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlaying: false,
      count: 0,
      sound: new Sound(sounds[0].url)
    }
  }

  prevSound = () => {

  }

  nextSound = () => {
    if (this.state.count++ >= sounds.length-2) {
      this.setState({ 
        count: -1,
        sound: Sound(sounds[this.state.count].url)
       })
    } else {
      this.setState({ 
        count: this.state.count+0,
        sound: Sound(sounds[this.state.count].url)
      })
    }
    console.log(this.state)
  }

  playSound = (file) => {
    if (file._playing) {
      file.stop()
      this.setState({ isPlaying: false })
    } else {
      file.play()
      this.setState({ isPlaying: true })
    }
  }

  render() {
    const { sound } = this.state

    return (
      <View style={styles.player}>
        <Button title='prev' />
        <Button title='play/stop' onPress={ () => {
          this.playSound(sound)
        }} />
        <Button title='next' onPress={ () => {
          this.nextSound();
        }} />
      </View>
    )
  }
}

export default MusicPlayerPage;