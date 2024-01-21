import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';
import MapView from 'react-native-maps';

export default function MapSection({navigation, position}) {

  const mapRegion = {
    latitude: position.lat,
    longitude: position.lon,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }

  return (
    <View style={styles.rectangle}>
      <View style={GlobalStyles.defaultContainer}>
        <Text style={GlobalStyles.title }>
          MAP
        </Text>
        <MapView
          style={{ alignSelf: 'stretch', height: '85%', margin: '6%' }}
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
  }
})