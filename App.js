import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './styles/globalStyles';
import Homepage from './screens/homepage/homepage';

export default function App() {

  console.log(styles.container)

  return (
    <View style={styles.container}>
        <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.globalStyles,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});