import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls, Plane } from '@react-three/drei'
import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';

const World = () => {
    const [places, setPlaces] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLabelClick = (label) => {
      const uniqueId = label.properties.name.replace().toLowerCase();
      /* setSelectedLocation(uniqueId); */
      console.log(uniqueId);
    };

    useEffect(() => {
        // load data
        fetch('/ne_110m_populated_places_simple.geojson').then(res => res.json())
            .then(({ features }) => setPlaces(features));
    }, []);

    return <Globe
        globeImageUrl="/earthcolormap.png"
        labelsData={places}
        labelLat={d => d.properties.latitude}
        labelLng={d => d.properties.longitude}
        labelText={d => d.properties.name}
        labelSize={d => 2}
        labelDotRadius={d => 1}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={0}
        onLabelClick={handleLabelClick}
    />;
};

function Planet() {
    return (
        <>
            <World />
        </>
    )
}

export default Planet
