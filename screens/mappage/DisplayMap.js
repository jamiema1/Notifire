import React, { useState } from 'react'
import { Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { getData } from '../../data/fireIndex';

const fireIcon = require('../../assets/images/icon-fire.png')

const data = getData()

export default function DisplayMap({position}) {
  const [mapRegion, setmapRegion] = useState({
    latitude: position.lat,
    longitude: position.lon,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
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
      {data.map((location) => 
        <Marker 
          coordinate = {{latitude: location.lat, longitude: location.lng}}
          title={"Fire Danger: " + location.fire}
          description={"City: " + location.city}
          key={location.lat * location.lng}
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