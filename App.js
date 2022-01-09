import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack'

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator style={styles.container}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
