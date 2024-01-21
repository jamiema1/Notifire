import React, { useState } from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { Button, StyleSheet, Text, View } from 'react-native';
import WarningPopup from './WarningPopup';
import FireDanger from './FireDanger';
import Load from './Load';
import AirPollution from './AirPollution';

const logo = require('../../assets/images/notifire_logo.png')


export default function Homepage({navigation}) {

  // const [loading, setLoading] = useState(true)
    
  // setTimeout(() => {
  //   setLoading(false)
  // }, 2000)

  // if (loading) {
  //   return <Load />
  // }
  
  const fireDangerRating = 4

  
  return (
    <>
      {fireDangerRating >= 3 && <WarningPopup />}
      <FireDanger />
      <AirPollution />
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
