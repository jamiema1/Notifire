import React from 'react'
import { GlobalStyles, windowHeight } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const APmeter1 = require('../../assets/images/AP Meter 1.png')
const APmeter2 = require('../../assets/images/AP Meter 2.png')
const APmeter3 = require('../../assets/images/AP Meter 3.png')
const APmeter4 = require('../../assets/images/AP Meter 4.png')
const APmeter5 = require('../../assets/images/AP Meter 5.png')

const meterLevels = [APmeter1, APmeter2, APmeter3, APmeter4, APmeter5]

const airQuality = ["Good", "Fair", "Moderate", "Poor ", "Very Poor"]

export default function AirPollution({airPollution}) {

  function getAirQualityImage() {
    return (
      <View style={{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
          style={GlobalStyles.images}
          source={meterLevels[airPollution]}
        />
      </View>
    );
  }

  function getAirQualityDisplayNumber() {
    return (
      <View style={{
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '3%',
      }}>
        <Text style={GlobalStyles.numberProperties}>
          {airPollution}
        </Text>
      </View>
    )
  }
  
  function getAirQualityString() {
    return (
      <View style={{
        width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <Text style={GlobalStyles.largeFontSize}>{airQuality[airPollution]} {'\n'}Air Quality</Text>
      </View>
    )
  }

  return (
    <View style={styles.rectangle}>
      <View style={GlobalStyles.defaultContainer}>
        <Text style={GlobalStyles.smallBoldFontSize}>
          AIR POLLUTION
        </Text>
        <View style={{ flexDirection: 'row'}}>
            {getAirQualityDisplayNumber()}
            {getAirQualityString()}
            {getAirQualityImage()}
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    height: windowHeight*0.17
  },
  images: {
    height: 15,
    width: 15
  }
});