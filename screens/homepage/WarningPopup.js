import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function WarningPopup() {
  return (
    <View style={styles.container}>
      <b>WARNING</b>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.globalStyles,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Barlow-Medium"
  }
});