import React from 'react'
import { GlobalStyles, RoundedSquare } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const APmeter1 = require('../../assets/images/AP Meter 1.png')
const APmeter2 = require('../../assets/images/AP Meter 2.png')
const APmeter3 = require('../../assets/images/AP Meter 3.png')
const APmeter4 = require('../../assets/images/AP Meter 4.png')
const APmeter5 = require('../../assets/images/AP Meter 5.png')

const meterLevels = [APmeter1, APmeter2, APmeter3, APmeter4, APmeter5]

const airQuality = ["Good", "Low", "Moderate", "High", "Very High", "Extreme"]

export default function AirPollution() {
  const airPollutionLevel = 3 // TODO change

  return (
    <View style={styles.rectangle}>
      <View style={styles.warning}>
        <Text style={GlobalStyles.smallBoldFontSize}>
          AIR POLLUTION
        </Text>

        <View style={GlobalStyles.containerAlignCenter}>
          <Image
            style={GlobalStyles.images}
            source={meterLevels[airPollutionLevel]}
          />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  warning: {
    ...GlobalStyles.flextangle,
    ...GlobalStyles.containerAlignleft,
    backgroundColor: '#2C3445',
  },
  text: {
    ...GlobalStyles.smallFontSize,
  },
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    height: '16%'
  },
  mediumFontSize: {
    ...GlobalStyles.mediumFontSize,
    justifyContent: 'center',
    alignItems: 'center'
  }
});