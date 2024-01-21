import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import CustomButton from '../../customComponents/Button';

const logo = require('../../assets/notifire_logo.png')

export default function Homepage({navigation}) {



  return (
    <>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Image
        style={styles.logo}
        source={logo}
      />
      <CustomButton 
        onPress={() =>
          navigation.navigate('Map')
        }
        title="Go to Map"
      />
      {/* <StatusBar style="auto" /> */}
    </>
  )
}


const styles = StyleSheet.create({
  logo: {
    borderRadius: 25,
    width: 75,
    height: 75,
  }
})