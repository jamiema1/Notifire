import React from 'react'
import { GlobalStyles, RoundedSquare } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const logo = require('../../assets/images/icon-fire 4.png')


export default function WarningPopup() {
  return (
    <View style={styles.rectangle}>
      <View style={styles.warning}>
        <Text style={GlobalStyles.smallBoldFontSize}>
          WARNING
          <Image
            style={styles.logo}
            source={logo}
          />
        </Text>
        <Text style={GlobalStyles.mediumFontSize}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  warning: {
    ...GlobalStyles.flextangle,
    ...GlobalStyles.containerAlignleft,
    backgroundColor: '#E56E0C',
  },
  text: {
    ...GlobalStyles.smallFontSize,
    // alignContent: 'left'
  },
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    height: '12%'
  }
});
