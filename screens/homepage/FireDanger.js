import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const meter0 = require('../../assets/images/Meter 0.png')
const meter1 = require('../../assets/images/Meter 1.png')
const meter2 = require('../../assets/images/Meter 2.png')
const meter3 = require('../../assets/images/Meter 3.png')
const meter4 = require('../../assets/images/Meter 4.png')
const meter5 = require('../../assets/images/Meter 5.png')

const meterLevels = [meter0, meter1, meter2, meter3, meter4, meter5]

const riskLevels = ["Very Low", "Low", "Moderate", "High", "Very High", "Extreme"]
const underRiskLevels = ["No Warning", "Advise", "Advise", "Watch and Act", "Watch and Act", "Emergency Warning"]
const riskInformationText =
  ["The fire danger level is at 0, very low risk. There is no current threat in your area.",
    "The fire danger level is at 1, low risk. Read and follow the warning instructions above.",
    "The fire danger level is at 2, moderate risk. Read and follow the warning instructions above.",
    "The fire danger level is at 3, high risk. Read and follow the warning instructions above.",
    "The fire danger level is at 4, very high risk. Read and follow the warning instructions above.",
    "The fire danger level is at 5, extreme risk. Read and follow the warning instructions above."
  ]

export default function FireDanger({ fireDanger }) {

  function getFireDangerDisplayNumber() {
    return (
      <View style={{
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '3%',
      }}>
        <Text style={GlobalStyles.numberProperties}>
          {fireDanger}
        </Text>
      </View>
    )
  }

  function getRiskLevelText() {
    return (
      <View style={{
        // width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <Text style={GlobalStyles.largeBoldFontSize}>
          {riskLevels[fireDanger]}
        </Text>
        <Text style={GlobalStyles.largeFontSize}>
          {underRiskLevels[fireDanger]}
        </Text>
      </View>
    )
  }

  function getFireDangerImage() {
    return (
      <View style={GlobalStyles.containerAlignCenter}>
        <Image
          style={GlobalStyles.images}
          source={meterLevels[fireDanger]}
        />
      </View>
    )
  }

  return (
    <View style={styles.rectangle}>
      <View style={GlobalStyles.defaultContainer}>
        <Text style={GlobalStyles.title}>
          FIRE DANGER
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {getFireDangerDisplayNumber()}
          {getRiskLevelText()}
        </View>
        {getFireDangerImage()}
        <Text style={GlobalStyles.mediumFontSize}>
          {riskInformationText[fireDanger]}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    // height: windowHeight * 0.25
  },
  mediumFontSize: {
    ...GlobalStyles.mediumFontSize,
    justifyContent: 'center',
    alignItems: 'center'
  }
});