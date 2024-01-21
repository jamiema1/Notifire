import React from 'react'
import { GlobalStyles, windowHeight } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const fireIcon12 = require('../../assets/images/icon-fire.png')
const fireIcon3 = require('../../assets/images/fire-orange.png')
const fireIcon45 = require('../../assets/images/fire-red.png')
const orange = '#E56E0C'
const red = '#ED1818'
const white = '#F5EEE9'

const icon = ['', fireIcon12, fireIcon12, fireIcon3, fireIcon45, fireIcon45]
const bgColor = ['', white, white, orange, red, red]
const textColor = ['', orange, orange, white, white, white]

const warningMessage = 
["", 
"An incident has started. There is no immediate danger. Stay up to date in case the situation changes.",
"An incident has started. There is no immediate danger. Stay up to date in case the situation changes.",
"There is a heightened level of threat. Conditions are changing and you need to start taking action now to protect you and your family.",
"There is a heightened level of threat. Conditions are changing and you need to start taking action now to protect you and your family.",
"This is the highest level of warning. You may be in danger and need to take action immediately. Any delay now puts your life at risk."
]

export default function WarningPopup({fireDanger}) {
  return (
    <View style={styles.rectangle}>
      <View style={{
        ...GlobalStyles.flextangle,
        ...GlobalStyles.containerAlignleft,
        backgroundColor: bgColor[fireDanger]
      }}>
        <Text style={{
          ...GlobalStyles.title,
          color: textColor[fireDanger]
          }}>
          WARNING
          <Image
            style={styles.image}
            source={icon[fireDanger]}
          />
          {'\n'}
        </Text>
        <Text style={{...GlobalStyles.mediumFontSize, color: textColor[fireDanger]}}>{warningMessage[fireDanger]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    ...GlobalStyles.smallFontSize,
    // alignContent: 'left'
  },
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    height: windowHeight * 0.14
  },
  image: {
    height: 15,
    width: 15
  }
});
