import React, { useState } from 'react'
import { Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const fireIcon = require('../../assets/icon-fire.png')

const locations = [{latitude: -33.8688,longitude: 151.2093}, {latitude: -33.86,longitude: 151.20}]

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
      rotateEnabled={false}
      showsPointsOfInterest={false}
      showsBuildings={false}
      // onMarkerPress={(e) => {console.log(e)}}
    >
      {locations.map((location) => 
        <Marker 
          coordinate = {location}
          title={"Risk Level (0-5)"}
          description={"Location"}
        >
          <Image 
            source={fireIcon}
            style={{height: 50, width: 50}}
          />
        </Marker>
      )}
      </MapView> 
  );
}