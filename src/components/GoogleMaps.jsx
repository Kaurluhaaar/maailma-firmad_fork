import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React, { useState, useCallback } from 'react';

const containerStyle = {
    width: '50%',
    height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_X_GOOGLE_KEY}`,
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
            <Marker
                position={center}
            >
            </Marker>
        <></>
      </GoogleMap>
  ) : <></>
}

export default GoogleMaps
//GoogleMaps
