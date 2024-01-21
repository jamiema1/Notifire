import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { ScrollView, StyleSheet, View } from 'react-native';
import WarningPopup from './WarningPopup';
import FireDanger from './FireDanger';
import AirPollution from './AirPollution';
import MapSection from './MapSection';
import City from './City';
import Wind from './Wind';
import Gust from './Gust';
import Information from './Information';

export default function Homepage({route, navigation}) {

  const location = route.params.location

  const city = location.city
  const fireDanger = location.fire
  const airPollution = location.air
  const wind = location.wind
  const gusts = location.gust
  const direction = location.dir
  const lat = location.lat
  const lon = location.lng

  return (
    <ScrollView style={styles.homepage}>
      <City city={city}/>
      {fireDanger > 0 && <WarningPopup fireDanger={fireDanger}/>}
      <FireDanger fireDanger={fireDanger}/>
      <AirPollution airPollution={airPollution}/>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '50%' }}>
          <Wind direction={direction} wind={wind} />
        </View>
        <View style={{ width: '50%' }}>
          <Gust direction={direction} gust={gusts} />
        </View>
      </View>
      <MapSection navigation={navigation} position={{lat: lat, lon: lon}}/>
      <Information />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    borderRadius: 25,
    width: 75,
    height: 75,
  },
  text: {
    ...GlobalStyles.fontSize
  },
  homepage: {
    backgroundColor: "#212942"
  }
})
