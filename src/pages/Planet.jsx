import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls, Plane } from '@react-three/drei'
import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';

const World = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        // load data
        fetch('/ne_110m_populated_places_simple.geojson').then(res => res.json())
            .then(({ features }) => setPlaces(features));
    }, []);

    return <Globe
        globeImageUrl="/earthcolormap.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={places}
        labelLat={d => d.properties.latitude}
        labelLng={d => d.properties.longitude}
        labelText={d => d.properties.name}
        labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={2}
    />;
};


function Scene() {
    const fbx = useLoader(FBXLoader, 'models/earth.fbx')

    return (
        <>
        </>
    )
}

function Planet() {
    return (
        <>
            <World />
            {/*  <Canvas style={{ width: "100%", height: "100vh" }} >
            <PerspectiveCamera makeDefault fov={120} position={[0 , 70 , 10]} far={10000}/>
            <pointLight position={[0, 5, 0]} />
            <Suspense fallback={null}>
            </Suspense>
            <OrbitControls />
        </Canvas> */}
        </>
    )
}

export default Planet
