import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import WarningPopup from './WarningPopup';
import FireDanger from './FireDanger';

const logo = require('../../assets/images/notifire_logo.png')

export default function Homepage() {

  const fireDangerRating = 4

  return (
    <>
      {fireDangerRating >= 3 && <WarningPopup />}
      <FireDanger />
      <StatusBar style="auto" />
    </>
  )
}


const styles = StyleSheet.create({
  logo: {
    ...GlobalStyles.globalStyles,
    borderRadius: 25,
    width: 75,
    height: 75,
  }
})