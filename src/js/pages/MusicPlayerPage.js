import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import Sound from 'react-native-sound';

import { styles } from '../styles';

const jungle = new Sound('jungle.mp3');
const spencer = new Sound('spencer.mp3');
const bagRaiders = new Sound('bag_raiders.mp3');
const bluesSaraceno = new Sound('blues_saraceno.mp3')

const sounds = [
  {
    title: 'Jungle - Happy Man',
    sound: jungle,
  },
  {
    title: 'Spencer Davis Group - Im a man',
    sound: spencer,
  },
  {
    title: 'Bag Raiders - Shooting stars',
    sound: bagRaiders,
  },
  {
    title: 'Blues Saraceno - The river',
    sound: bluesSaraceno,
  },
];

class MusicPlayerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      count: 0,
      title: sounds[0].title,
      sound: sounds[0].sound,
    }
  }

  prevSound = (file) => {
    file.stop()
    if (this.state.count-1 < 0) {
      this.setState({
        count: sounds.length-1,
        title: sounds[sounds.length-1].title,
        sound: sounds[sounds.length-1].sound
      }, () => { this.playSound(this.state.sound) })
    } else {
      this.setState({
        count: this.state.count-1,
        title: sounds[this.state.count-1].title,
        sound: sounds[this.state.count-1].sound
      }, () => { this.playSound(this.state.sound) })
    }

  }

  nextSound = (file) => {
    file.stop()
    if (this.state.count+1 > sounds.length-1) {
      this.setState({
        count: 0,
        title: sounds[0].title,
        sound: sounds[0].sound
      }, () => { this.playSound(this.state.sound) })
    } else {
      this.setState({
        count: this.state.count+1,
        title: sounds[this.state.count+1].title,
        sound: sounds[this.state.count+1].sound
      }, () => { this.playSound(this.state.sound) })
    }
  }

  playSound = (file) => {
    if (file._playing) {
      file.pause()
      this.setState({ isPlaying: false })
    } else {
      file.play((success) => {
        if (success) {
          this.nextSound(file)
        }
      });
      this.setState({ isPlaying: true })
    }
  }

  render() {
    const { title, sound } = this.state

    return (
      <View style={styles.player}>
        <Text style={styles.player__text}>{title}</Text>
        <Button title='prev' onPress={ () => {
         this.prevSound(sound)
        }} />
        <Button title='play/stop' onPress={ () => {
          this.playSound(sound)
        }} />
        <Button title='next' onPress={ () => {
          this.nextSound(sound)
        }} />
      </View>
    )
  }
}

export default MusicPlayerPage;
