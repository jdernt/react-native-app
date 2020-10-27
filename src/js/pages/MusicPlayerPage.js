import React, { useEffect } from "react";
import {
  Text,
  View,
  Button
} from "react-native";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";

import Player from "../components/MusicPlayer";

import { styles } from '../styles';

const localSongs = [
  {
    id: "1",
    url: require('../../audio/jungle.mp3'),
    title: "Happy Man",
    artist: "Jungle",
    artwork: "https://pic.lyricshub.ru/img/6/s/2/h/yfw6ydh2s6.jpg",
    duration: 190,
  },
  {
    id: "2",
    url: require('../../audio/spencer.mp3'),
    title: "Im a man",
    artist: "Spencer Davis group",
    artwork: "https://img.discogs.com/Qoa36Rx-OwpM3PzO0sVp8xvFqsk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2047664-1260718467.jpeg.jpg",
    duration: 165,
  },
  {
    id: "3",
    url: require('../../audio/bag_raiders.mp3'),
    title: "Shooting stars",
    artist: "Bag raiders",
    artwork: "https://images-na.ssl-images-amazon.com/images/I/51gv0XyD6tL._SX342_QL70_ML2_.jpg",
    duration: 235,
  },
  {
    id: "4",
    url: require('../../audio/blues_saraceno.mp3'),
    title: "The river",
    artist: "Blues Saraceno",
    artwork: "https://i.ytimg.com/vi/fmLR8S8DYqo/maxresdefault.jpg",
    duration: 215,
  }
]

export default function MusicPlayerPage() {
  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add(localSongs);
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
    ],

    // An array of capabilities that will show up when the notification is in the compact form on Android
    compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
    ],
    notificationCapabilities : [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
    ],
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack(); 
    if (currentTrack === null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(localSongs);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  return (
    <View style={styles.player}>
      <Player
        onNext={skipToNext}
        style={styles.player__container}
        onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
      />
      <Text style={styles.player__state}>{getStateName(playbackState)}</Text>
    </View>
  );
}

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return "None";
    case TrackPlayer.STATE_PLAYING:
      return "Playing";
    case TrackPlayer.STATE_PAUSED:
      return "Paused";
    case TrackPlayer.STATE_STOPPED:
      return "Stopped";
    case TrackPlayer.STATE_BUFFERING:
      return "Buffering";
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}
