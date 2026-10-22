import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <View style={styles.cor1}></View>
    <View style={styles.cor2}></View>
    <View style={styles.cor3}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cor1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  cor2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  cor3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
