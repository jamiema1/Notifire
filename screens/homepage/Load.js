import React from 'react'
import { GlobalStyles } from '../../styles/globalStyles';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Load() {

  return (
    <>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/images/loading.gif')}  style={styles.img}/>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200, 
    height: 200
  }
})