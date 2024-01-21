import React, { useState } from 'react'
import MapView, {Marker} from 'react-native-maps';

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
      showsScale={true}
    >
    <Marker coordinate = {{latitude: -33.8688,longitude: 151.2093}}
     pinColor = {"purple"} // any color
     title={"title"}
     description={"description"}/>
    </MapView> 
  );
}