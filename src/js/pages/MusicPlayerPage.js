import React, { useEffect } from "react";
import { Text, View } from "react-native";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";

import Player from "../components/Player";
import playlistData from "../../data/playlist.json";
import localTrack from "../../resources/pure.m4a";

import { styles } from '../styles';

export default function PlaylistScreen() {
  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
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
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
    ],
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      await TrackPlayer.add({
        id: "local-track",
        url: localTrack,
        title: "Pure (Demo)",
        artist: "David Chavez",
        artwork: "https://images.unsplash.com/photo-1603690969587-31fedd1009c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        duration: 28
      });
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

PlaylistScreen.navigationOptions = {
  title: "Playlist Example"
};

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
