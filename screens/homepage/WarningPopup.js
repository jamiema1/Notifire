import React from 'react'
import { GlobalStyles, windowHeight } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const fireIcon12 = require('../../assets/images/fire-blue.png')
const fireIcon3 = require('../../assets/images/fire-orange.png')
const fireIcon45 = require('../../assets/images/fire-red.png')
const orange = '#E56E0C'
const red = '#ED1818'
const white = '#F5EEE9'
const blue = "#2C3445" 

const icon = ['', fireIcon12, fireIcon12, fireIcon3, fireIcon45, fireIcon45]
const bgColor = ['', blue, blue, orange, red, red]
const textColor = ['', white, white, white, white, white]

    // backgroundColor: 'rgba(255, 255, 255, 0.5)'
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
        ...GlobalStyles.defaultContainer,
        backgroundColor: bgColor[fireDanger],
      }}>
        <View style={{flexDirection:'row'}}>
          <Text style={{
            ...GlobalStyles.title,
            color: textColor[fireDanger],
            paddingRight: 10
            }}>
            WARNING
            {'\n'}
          </Text>
            <Image
              style={styles.image}
              source={icon[fireDanger]}
            />
        </View>
        <Text style={{...GlobalStyles.mediumFontSize, color: textColor[fireDanger]}}>{warningMessage[fireDanger]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    ...GlobalStyles.smallFontSize,
  },
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    // height: windowHeight * 0.20
  },
  image: {
    height: 15,
    width: 15
  }
});
