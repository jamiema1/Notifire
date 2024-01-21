import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import DisplayMap from './DisplayMap'
import { StyleSheet } from 'react-native'
import CustomButton from '../../customComponents/Button'

export default function MapPage({route, navigation}) {
  
  const { position } = route.params;

  return (
    <>
      <DisplayMap position={position} />
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