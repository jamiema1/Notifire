import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './styles/globalStyles';
import Homepage from './screens/homepage/homepage';
import DisplayMap from './screens/mappage/DisplayMap';

export default function App() {

  console.log(styles.container)

  return (
    <View style={styles.container}>
        <Homepage />
        <DisplayMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.globalStyles,
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});