import React, { useState } from 'react'
import { Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { getData } from '../../data/fireIndex';

const fireIcon = require('../../assets/images/icon-fire.png')

const data = getData()


const MIN_LATITUDE = -45;
const MAX_LATITUDE = -10;
const MIN_LONGITUDE = 110;
const MAX_LONGITUDE = 155;

export default function DisplayMap({position}) {
  const [mapRegion, setMapRegion] = useState({
    latitude: position.lat,
    longitude: position.lon,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  
  function handleRegionChange(newRegion) {
    // Enforce constraints on latitude
    const constrainedLatitude = Math.max(
      Math.min(newRegion.latitude, MAX_LATITUDE),
      MIN_LATITUDE
    );

    // Enforce constraints on longitude
    const constrainedLongitude = Math.max(
      Math.min(newRegion.longitude, MAX_LONGITUDE),
      MIN_LONGITUDE
    );

    setMapRegion({
      ...newRegion,
      latitude: constrainedLatitude,
      longitude: constrainedLongitude,
    });
  };

  return (
    <MapView
      style={{ alignSelf: 'stretch', height: '100%' }}
      region={mapRegion}
      // showsScale={true}
      rotateEnabled={false}
      showsPointsOfInterest={false}
      showsBuildings={false}
      maxDelta={50}
      onRegionChangeComplete={(newRegion) => handleRegionChange(newRegion)}
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