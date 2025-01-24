import { useRef } from "react";
import { StyleSheet, View, Button } from 'react-native';
import { Confetti, ConfettiMethods } from "react-native-fast-confetti";

export default function App() {
  const confettiRef = useRef<ConfettiMethods>(null);

  return (
    <View style={styles.container}>
      <Confetti ref={confettiRef} autoplay={false} fadeOutOnEnd />

      <Button title="Start" onPress={() => confettiRef.current?.restart()} />
      <Button title="Pause" onPress={() => confettiRef.current?.pause()} />
      <Button title="Play" onPress={() => confettiRef.current?.resume()} />
      <Button title="Reset" onPress={() => confettiRef.current?.reset()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24
  },
});
