import React, { useState } from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import WarningPopup from './WarningPopup';
import FireDanger from './FireDanger';
import Load from './Load';
import AirPollution from './AirPollution';
import MapSection from './MapSection';
import { getData } from '../../data/fireIndex';

const logo = require('../../assets/images/notifire_logo.png')

const data = getData()

const dataMap = new Map()

data.forEach((location, index) => {
  dataMap.set(index, location)
})

export default function Homepage({navigation}) {

  const [location, setLocation] = useState(dataMap.get(1))

  const [loading, setLoading] = useState(true)
    
  setTimeout(() => {
    setLoading(false)
  }, 2150)

  if (loading) {
    return <Load />
  }

  const fireDanger = location.fire
  const airPollution = location.air
  const wind = location.wind
  const gusts = location.gust
  const direction = location.dir
  const lat = location.lat
  const lon = location.lng

  return (
    <ScrollView>
      {fireDanger >= 3 && <WarningPopup />}
      <FireDanger fireDanger={fireDanger}/>
      <AirPollution airPollution={airPollution}/>
      <MapSection navigation={navigation} position={{lat: lat, lon: lon}}/>
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
  }
})
