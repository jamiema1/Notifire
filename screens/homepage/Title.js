import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';

const savedLogo = require('../../assets/images/icon-saved.png')
const logo = require('../../assets/images/notifire_logo.png')

export default function Title () {
  return (
    <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={() => console.log("click")}>
        <Image
          source={savedLogo}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <Text style={GlobalStyles.largeBoldFontSize}>NOTIFIRE</Text>
      <Image
        source={logo}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30
  }
})