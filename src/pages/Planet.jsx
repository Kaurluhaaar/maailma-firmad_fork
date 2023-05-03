import React, { useState, useEffect } from 'react';
import Company from '../components/Company';
import Globe from 'react-globe.gl';

const World = () => {
    const [places, setPlaces] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState(null);

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

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>`;

console.log(places);

  const gData = places.map((company, index) => ({
    lat: company.location.lat,
    lng: company.location.lng,
    size: 20,
    color: 'red'
  }));

  console.log(gData);

  return <Globe
    globeImageUrl="/earthcolormap.png"
    htmlElementsData={gData}
    htmlElement={d => {
    const el = document.createElement('div');
    el.innerHTML = markerSvg;
    el.style.color = d.color;
    el.style.width = `${d.size}px`;

    el.style['pointer-events'] = 'auto';
    el.style.cursor = 'pointer';
    el.onclick = () => console.info(d);
    return el;
}}
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
