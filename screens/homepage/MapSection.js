import React, { useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles, RoundedSquare } from '../../styles/globalStyles';
import MapView from 'react-native-maps';

export default function MapSection({navigation, position}) {

  const [mapRegion, setmapRegion] = useState({
    latitude: position.lat,
    longitude: position.lon,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  return (
    <View style={styles.rectangle}>
      <View style={styles.warning}>
        <Text style={GlobalStyles.smallBoldFontSize}>
          MAP
        </Text>
        <MapView
          style={{ alignSelf: 'stretch', height: '100%' }}
          region={mapRegion}
          rotateEnabled={false}
          scrollEnabled={false}
          showsPointsOfInterest={false}
          onPress={() => navigation.navigate("Map", { position })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rectangle: {
    ...GlobalStyles.containerAlignleft,
    height: Dimensions.get("screen").height * 0.5
  },
  warning: {
    ...GlobalStyles.flextangle,
    ...GlobalStyles.containerAlignleft,
    backgroundColor: '#2C3445',
  },
})