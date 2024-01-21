import React from 'react'
import { GlobalStyles, RoundedSquare } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const logo = require('../../assets/images/icon-fire 4.png')


export default function WarningPopup() {
  return (
    <View style={GlobalStyles.rectangle}>
      <View style={styles.warning}>
        <Text style={styles.text}>WARNING</Text>
        <Image
        style={styles.logo}
        source={logo}
        />
        
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  warning: {
    ...GlobalStyles.flextangle,
    ...GlobalStyles.rectangle,
    backgroundColor:'#E56E0C',
  },
  text: {
    ...GlobalStyles.fontSize,
    alignContent: 'left'
  }
});
