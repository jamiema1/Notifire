import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './styles/globalStyles';
import Homepage from './screens/homepage/Homepage';
import MapPage from './screens/mappage/MapPage';
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Title from './screens/homepage/Title';
import LoadingPage from './screens/loadingpage/LoadingPage';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Barlow': require("./assets/fonts/Barlow-Regular.ttf"),
    'BarlowBold': require("./assets/fonts/Barlow-Bold.ttf")
  })

  if (!fontsLoaded) {
    return null
  }


  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Loading"
          component={LoadingPage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: "#212942"
            },
          }}
        />
        <Stack.Screen 
          name="Home"
          component={Homepage}
          options={{
            headerTitle: () => <Title />,
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#212942"
            },
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}