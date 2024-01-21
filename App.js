import Homepage from './screens/homepage/Homepage';
import MapPage from './screens/mappage/MapPage';
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Title from './screens/homepage/Title';
import LoadingPage from './screens/loadingpage/LoadingPage';
import { useState } from 'react';
import { getData } from './data/fireIndex';
import BackButton from './screens/mappage/BackButton';



const data = getData()

const dataMap = new Map()

data.forEach((location, index) => {
  dataMap.set(index, location)
})

export default function App() {

  const [location, setLocation] = useState(dataMap.get(0))

  // console.log(location)

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
          initialParams={{location}}
          options={{
            headerTitle: () => <Title dataMap={dataMap} setLocation={setLocation}/>,
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#212942"
            },
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapPage}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => <BackButton />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}