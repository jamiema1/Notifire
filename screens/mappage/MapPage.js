import React from 'react'
import DisplayMap from './DisplayMap'
import { StyleSheet } from 'react-native'

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