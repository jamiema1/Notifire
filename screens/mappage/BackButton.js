import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native';

const backIcon = require('../../assets/images/button-arrow.png')

export default function BackButton() {

  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Image 
        style={styles.image}
        source={backIcon}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40
  }
});