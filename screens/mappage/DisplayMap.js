import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Platform, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
console.log(Platform.OS)



export default function DisplayMap() {
  const [mapRegion, setmapRegion] = useState({
    latitude: -33.8688,
    longitude: 151.2093,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  return (
    <MapView
      style={{ alignSelf: 'stretch', height: '100%' }}
      region={mapRegion}
    /> 
  );
}