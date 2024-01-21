import React, { useState } from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { Button, StyleSheet, Text, View } from 'react-native';
import WarningPopup from './WarningPopup';
import FireDanger from './FireDanger';
import Load from './Load';
import AirPollution from './AirPollution';
import { getData } from '../../data/fireIndex';

const logo = require('../../assets/images/notifire_logo.png')

const data = getData()

const dataMap = new Map()

data.forEach((location, index) => {
  dataMap.set(index, location)
})

export default function Homepage({navigation}) {

  const [location, setLocation] = useState(dataMap.get(0))

  const fireDanger = location.fire
  const airPollution = location.air
  const wind = location.wind
  const gusts = location.gust
  const direction = location.dir

  return (
    <>
      {fireDanger >= 3 && <WarningPopup />}
      <FireDanger fireDanger={fireDanger}/>
      <AirPollution airPollution={airPollution}/>
      <Button onPress={() => navigation.navigate("Map")} title={"button"}>Map</Button>
    </>
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
