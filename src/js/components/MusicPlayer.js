import React, { useState } from "react";
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents
} from "react-native-track-player";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from '../styles';

function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.player__progress}>
      <View style={{ flex: progress.position, backgroundColor: "#333" }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: "#c9c9c9"
        }}
      />
    </View>
  );
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.player__controlButtonContainer} onPress={onPress}>
      <Text style={styles.player__controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState("");
  useTrackPlayerEvents(["playback-track-changed"], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const { style, onNext, onPrevious, onTogglePlayback } = props;

  var middleButtonText = "Play";

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = "Pause";
  }

  return (
    <View style={[styles.player__card, style]}>
      <Image style={styles.player__cover} source={{ uri: trackArtwork }} />
      <ProgressBar />
      <Text style={styles.player__title}>{trackTitle}</Text>
      <Text style={styles.player__artist}>{trackArtist}</Text>
      <View style={styles.player__controls}>
        <ControlButton title={"<<"} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={">>"} onPress={onNext} />
      </View>
    </View>
  );
}
