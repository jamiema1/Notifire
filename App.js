import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './styles/globalStyles';
import Homepage from './screens/homepage/Homepage';

export default function App() {

  return (
    <View style={styles.container}>
        <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.globalStyles,
    // ...GlobalStyles.backgroundColor,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});