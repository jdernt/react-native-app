import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import Sound from 'react-native-sound';

import { styles } from '../styles';

const sounds = [
  {
    title: 'Bag Raiders - Shooting stars',
    url: 'bag_raiders.mp3',
  },
  {
    title: 'Blues Saraceno - The river',
    url: 'blues_saraceno.mp3',
  },
  {
    title: 'Jungle - Happy Man',
    url: 'jungle.mp3',
  },
  {
    title: 'Spencer Davis Group - Im a man',
    url: 'spencer.mp3',
  },
];

sounds.forEach( sound => {
  let soundItem = new Sound(sound.url)
  sound.sound = soundItem
})

class MusicPlayerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      count: 0,
      sound: sounds[0].sound,
    }
  }

  playSound = (file) => {
    try {
      this.setState({
        title: sounds[file._key].title,
        sound: file
      })
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
    } catch {
        console.log(file)
      }
  }

  playAnotherSound = (file) => {
    file.setCurrentTime(0)
    this.playSound(file)
  }

  prevSound = (file) => {
    file.stop()
    if (file._key-1 < 0) {
      this.setState({
        count: sounds.length-1,
        sound: sounds[sounds.length-1].sound
      }, () => { this.playAnotherSound(this.state.sound) })
    } else {
      this.setState({
        count: file._key-1,
        sound: sounds[file._key-1].sound
      }, () => { this.playAnotherSound(this.state.sound) })
    }
  }

  nextSound = (file) => {
    file.stop()
    if (file._key+1 > sounds.length-1) {
      this.setState({
        count: 0,
        sound: sounds[0].sound
      }, () => { this.playAnotherSound(this.state.sound) })
    } else {
      this.setState({
        count: file._key+1,
        sound: sounds[file._key+1].sound
      }, () => { this.playAnotherSound(this.state.sound) })
    }
  }

  render() {
    const { isPlaying, sound } = this.state

    return (
      <View style={styles.player}>
        {sounds.map((sound, i) => {
          return (
            <View style={styles.player__item} key={i}>
              <Text>
                {sound.title}
              </Text>
              <Button
                title='play'
                onPress={ () => {
                  this.state.sound.stop()
                  this.playSound(sound.sound)
                }}
              />
            </View>
          )
        })}
        <View style={styles.player__controls}>
          <Text style={styles.player__text}>{sounds[sound._key].title}</Text>
          <Button
            title='prev'
            onPress={ () => {
              this.prevSound(sound)
            }}
          />
          <Button
            title={ isPlaying ? 'pause' : 'play' }
            onPress={ () => {
              this.playSound(sound)
            }}
          />
          <Button
            title='next'
            onPress={ () => {
              this.nextSound(sound)
            }}
          />
        </View>
      </View>
    )
  }
}

export default MusicPlayerPage;
