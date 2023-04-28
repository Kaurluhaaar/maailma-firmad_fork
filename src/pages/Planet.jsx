import React, { useState, useEffect } from 'react';
import Company from '../components/Company';
import Globe from 'react-globe.gl';

const World = () => {
    const [places, setPlaces] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState(null);

    console.log(places);

/*     const handleLabelClick = (industry) => {
      const uniqueId = JSON.stringify(industry.properties.name);
      setSelectedLabel(uniqueId);
    };
    Company(selectedLabel) */

    useEffect(() => {
        // load data
        fetch('/companies.json').then(res => res.json())
            .then((json) => setPlaces(json));
    }, []);

    return <Globe
        globeImageUrl="/earthcolormap.png"
        labelsData={places}
        labelLat={d => d.location.lat}
        labelLng={d => d.location.lng}
        labelText={d => d.name}
        labelSize={d => 2}
        labelDotRadius={d => 1}
        labelColor={() => 'rgba(255, 165, 0, 1)'}
        labelResolution={0}
    />;
};

function Planet() {
    return (
        <>
            {/* <Company/> */}
            <World />
        </>
    )
}

export default Planet
