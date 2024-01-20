import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native-web';

const logo = require('../../assets/notifire_logo.png')

export default function Homepage() {

  return (
    <>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        style={styles.logo}
        source={logo}
      />
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