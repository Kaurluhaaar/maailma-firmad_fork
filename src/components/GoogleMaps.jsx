import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React, { useState, useCallback, useEffect } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px',
};

function GoogleMaps({latitude, longitude}) {
    const [zoom, setZoom] = useState(null)
    const center = {
        lat: latitude,
        lng: longitude,
    };
    useEffect(() => {
        setTimeout(() => {
            setZoom(18)
        }, 300);
    }, [])
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_X_GOOGLE_KEY}`,
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(zoom);
    setMap(map);
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onUnmount={onUnmount}
        onLoad={onLoad}
        zoom={zoom}
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
