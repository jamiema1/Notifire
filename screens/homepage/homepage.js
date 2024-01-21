import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import WarningPopup from './WarningPopup';
import CustomButton from '../../customComponents/Button';

const logo = require('../../assets/images/notifire_logo.png')



export default function Homepage({navigation}) {

    
  
  const fireDangerRating = 4

  
  return (
    <>
      {fireDangerRating >= 3 && <WarningPopup />}
      <Image
        style={styles.logo}
        source={logo}
      />
      <Text style={styles.text}>Text</Text>
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
  },
  text: {
    ...GlobalStyles.fontSize
  }
})