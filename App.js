import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, seja bem-vindo!</Text>
      <TextInput placeholder="Digite algo..." style={styles.TextInput} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
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
    fontWeight: 'bold',
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  TextInput: {
    width: 200,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
