import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './styles/globalStyles';
import Homepage from './screens/homepage/Homepage';
import MapPage from './screens/mappage/MapPage';
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Barlow': require("./assets/fonts/Barlow-Black.ttf")
  })

  if (!fontsLoaded) {
    return null
  }


  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
        />
        <Stack.Screen
          name="Map"
          component={MapPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.globalStyles,
    // ...GlobalStyles.backgroundColor,
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});