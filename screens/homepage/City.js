import React from 'react'
import { GlobalStyles, windowHeight } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';

export default function City({city}) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.country}>AUSTRALIA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: windowHeight * 0.05
  },
  city: {
    ...GlobalStyles.extraLargeBoldFontSize,
    paddingBottom: 10
  },
  country: {
    ...GlobalStyles.mediumFontSize,
    paddingLeft: 0
  }
})