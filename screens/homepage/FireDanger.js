import React from 'react'
import { GlobalStyles, RoundedSquare } from '../../styles/globalStyles';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';


const meter0 = require('../../assets/images/Meter 0.png')
const meter1 = require('../../assets/images/Meter 1.png')
const meter2 = require('../../assets/images/Meter 2.png')
const meter3 = require('../../assets/images/Meter 3.png')
const meter4 = require('../../assets/images/Meter 4.png')
const meter5 = require('../../assets/images/Meter 5.png')

const meterLevels = [meter0, meter1, meter2, meter3, meter4, meter5]

const riskLevels = ["Very Low", "Low", "Moderate", "High", "Very High", "Extreme"]

export default function FireDanger({fireDanger}) {

  return (
    <View style={styles.rectangle}>
      <View style={styles.warning}>
        <Text style={GlobalStyles.smallBoldFontSize}>
          FIRE DANGER
        </Text>
        {/* <View style={{flexDirection:"row"}}> TODO make it so 3 is aligned beside the stacked text */}
          <Text style={GlobalStyles.numberProperties}>
            {fireDanger}
          </Text>
          {/* <Text style={styles.mediumFontSize}>
            {riskLevels[fireDangerLevel]}
            {"\n"}
            Test
          </Text> */}
        {/* </View> */}
        <View style={GlobalStyles.containerAlignCenter}>
          <Image
            style={GlobalStyles.images}
            source={meterLevels[fireDanger]}
          />
        </View>
        <Text style={GlobalStyles.smallFontSize}>
          The current fire danger level is {fireDanger}, {riskLevels[fireDanger].toLowerCase()}, Lorem ipsum dolor sit amet.
        </Text>
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
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    height: Dimensions.get("screen").height * 0.24
  },
  mediumFontSize: {
    ...GlobalStyles.mediumFontSize,
    justifyContent: 'center',
    alignItems: 'center'
  }
});