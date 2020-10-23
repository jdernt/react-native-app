import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native';
import Sound from 'react-native-sound';

import { styles } from '../styles';

const jungle = new Sound('jungle.mp3');
const spencer = new Sound('imaman.mp3');

const sounds = [
  {
    title: 'jungle',
    url: 'jungle.mp3',
    sound: jungle,
  },
  {
    title: 'im a man',
    url: 'imaman.mp3',
    sound: spencer,
  }
];

class MusicPlayerPage extends Component {

  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 1,
    volume: 1.0,
    isBuffering: false,
    sound: sounds[0].sound,
  }

  prevSound = () => {

  }

  nextSound = () => {
    try {
      this.setState({ 
        currentIndex: this.state.currentIndex+1,
        sound: sounds[this.state.currentIndex+1].sound
      })
    } catch {  
      this.setState({ 
        currentIndex: 0,
        sound: sounds[0].sound
      })
    }
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