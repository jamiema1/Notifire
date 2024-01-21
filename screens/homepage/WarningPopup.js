import React from 'react'
import { GlobalStyles, windowHeight } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const logo = require('../../assets/images/icon-fire 4.png')

const warningColor = ['', '#212942', '#2C3445', '#E56E0C', '#E56E0C', '#F5EEE9']

const warningMessage = 
["", 
"An incident has started. There is no immediate danger. Stay up to date in case the situation changes.",
"An incident has started. There is no immediate danger. Stay up to date in case the situation changes.",
"There is a heightened level of threat. Conditions are changing and you need to start taking action now to protect you and your family.",
"There is a heightened level of threat. Conditions are changing and you need to start taking action now to protect you and your family.",
"This is the highest level of warning. You may be in danger and need to take action immediately. Any delay now puts your life at risk."
]

export default function WarningPopup(fireDangerWarning) {
  return (
    <View style={styles.rectangle}>
      <View style={styles.warning}>
        <Text style={{
          ...GlobalStyles.title,
          backgroundColor: warningColor[fireDangerWarning]
        }}>
          WARNING
          <Image
            style={styles.logo}
            source={logo}
          />
          {'\n'}
        </Text>
        <Text style={GlobalStyles.mediumFontSize}>{warningMessage[fireDangerWarning]}</Text>
        {console.log(fireDangerWarning)}
        {console.log(warningMessage[fireDangerWarning])}
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
    height: windowHeight * 0.14
  }
});
