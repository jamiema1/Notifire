import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles, windowWidth } from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const savedIcon = require('../../assets/images/icon-saved.png')
const pinIcon = require('../../assets/images/icon-pin.png')
const logo = require('../../assets/images/notifire_logo.png')

export default function Title ({dataMap, setLocation}) {

  const [index, setIndex] = useState(0);

  const navigation = useNavigation()

  function getScreenKey() {
    const state = navigation.getState()
    const route = state.routes.find((r) => r.name === "Home");
    return route?.key || null;
  }

  const key = getScreenKey()

  return (
    <View style={{ width: windowWidth * 0.9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={() => {
        const newIndex = (index + 1) % dataMap.size
        setLocation(dataMap.get(newIndex))
        setIndex(newIndex)
        navigation.navigate({
          name: "Home",
          params: { location: dataMap.get(newIndex)},
          key
        });
      }}>
        <Image
          source={pinIcon}
          style={styles.image}
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
    width: 25,
    height: 25
  }
})