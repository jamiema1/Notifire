import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import WarningPopup from './WarningPopup';
import { Image } from 'react-native';
import CustomButton from '../../customComponents/Button';

const logo = require('../../assets/images/notifire_logo.png')

export default function Homepage({navigation}) {



  return (
    <>
      {fireDangerRating >= 3 && <WarningPopup />}
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