import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCl-DaW1d0QEENCqqgnym7yPnVNoBMHzbQ"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
