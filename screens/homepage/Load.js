import React from 'react'
import { StyleSheet, Image, View } from 'react-native';

export default function Load() {

  return (
    <View style={styles.imgContainer}>
      <Image source={require('../../assets/images/blurry_loading.gif')} style={styles.img} />
    </View>
  )
}


const styles = StyleSheet.create({
  imgContainer: {
    height: 725, 
    justifyContent: 'center',
    backgroundColor: '#212942',
  }
})