import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import DisplayMap from './DisplayMap'
import { StyleSheet } from 'react-native'
import CustomButton from '../../customComponents/Button'

export default function MapPage({navigation}) {
  


  return (
    <>
      <DisplayMap />
      {/* <CustomButton 
        onPress={() => goBack()}
        styles={styles} 
        title="back"
      /> */}
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:"aqua",
  },
  text: {
    color: "black",
  }
});