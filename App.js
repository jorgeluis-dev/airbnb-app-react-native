import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Text>Jorge</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#028090',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
